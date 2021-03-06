import { fire, githubAuthProvider } from "../firebase";
import { Octokit } from "@octokit/core";
import { getUser, addUser } from './userServices';
import { addToken, editToken } from "./tokenServices";

export default async function githubLogin() {
    var userReturn;
    githubAuthProvider.addScope('repo:status');
    await fire.auth().signInWithPopup(githubAuthProvider)
    .then(async (result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;

        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const accessToken = credential.accessToken;
    
        // The signed-in user info.
        const user = result.user;
        const userId = user.uid;
        const email = user.email;

        const octokit = new Octokit({
            auth: accessToken,
        });
        const { data } = await octokit.request("/user");
        const username = data.login;

        if (userId && email && username) {
            const userFound = await getUser(userId);

            if (userFound === false) {
                const newUser = await addUser(userId, email, username);
                await addToken(userId, accessToken);
                userReturn = newUser
            } else {
                const tokenPayload = {
                    "accessToken": accessToken 
                }
                await editToken(userId, tokenPayload);
                userReturn = userFound
            }
        }
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
    });
    return userReturn;
}