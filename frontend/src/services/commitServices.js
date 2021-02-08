import axios from 'axios';
import { Octokit } from "@octokit/core";
import { getToken } from "./tokenServices";
import { createToken } from './utils';

const url = 'http://localhost:7777/api/commits'

const pullEvents = async (userData) => {
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
                    return commits;
                }
                commits.push({
                    'commitId': currCommit.sha,
                    'userId': userData.userId,
                    'commitDate': event.created_at,
                    'repoName': event.repo.name,
                    'repoUrl': event.repo.url,
                    'commitMessage': currCommit.message,
                    'commitUrl': currCommit.url
                });
            }
        }
    }
    
    return commits;
}

export const addCommits = async (userData) => {
    const header = await createToken();

    const payload = await pullEvents(userData);

    try {
        const res = await axios.post(url, payload, { headers: header } );
        return res.data;
    } catch (e) {
        console.error(e);
    }
}