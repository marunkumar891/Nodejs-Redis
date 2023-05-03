const fetch = require('node-fetch');
const redis = require("../redisConfig/redis")
redisClient = redis()

function setResponse(username, repos) {
    return `<h2>${username} has ${repos} Github repos</h2>`;
}

exports.GetRepoDetails = async (username) => {
    let repos
    console.log('Getting Repo Details');
    try{
        repos = await redisClient.getCache(username)
        console.log(`details: ${repos}`)
    }catch (e) {
        console.log("Details not found in Cache")
    }

    if (!repos) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            console.log(data);
            repos = data.public_repos;
            //setResponse(username,repos)
        }catch (e) {
            console.log("Unable to fetch from github: ",e)
        }
        redisClient.setCache(username,repos)
        return (repos)
    }
    return repos


}