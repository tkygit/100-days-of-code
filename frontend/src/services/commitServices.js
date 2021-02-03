import { Octokit } from "@octokit/core";
import { getToken } from "./tokenServices"
export const pullEvents = async (userData) => {
    const accessToken = await getToken(userData.userId);

    const octokit = new Octokit({
        auth: accessToken,
    });

    const { data } = await octokit.request('GET /users/{username}/events', {
        username: userData.username
    });

    if (userData.lastCommitDate == null) {
        // pull all commits
    } else {
        // pull commits from 
    }
}