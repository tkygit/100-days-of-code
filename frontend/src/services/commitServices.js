import { Octokit } from "@octokit/core";
import { getToken } from "./tokenServices";

export const pullEvents = async (userData) => {
    const accessToken = await getToken(userData.userId);

    const octokit = new Octokit({
        auth: accessToken,
    });

    const { data } = await octokit.request('GET /users/{username}/events', {
        username: userData.username
    });

    const lastCommitId = userData.lastCommitId;

    var commits = [];

    for (var i = 0; i < data.length; i++) {
        var event = data[i]
        if ("commits" in data[i].payload) {
            const commitsArray = event.payload.commits;
            for (var j = 0; j < commitsArray.length; j++) {
                const currCommit = commitsArray[j];
                if (lastCommitId != null && lastCommitId === currCommit.sha) {
                    console.log("COMMITS: " + JSON.stringify(commits));
                    return commits;
                }
                commits.push({
                    'id': currCommit.sha,
                    'date': event.created_at,
                    'repo': event.repo.name,
                    'repoUrl': event.repo.url,
                    'message': currCommit.message,
                    'commitUrl': currCommit.url
                });
            }
        }
    }

    console.log("COMMITS: " + JSON.stringify(commits));
    return commits;
}