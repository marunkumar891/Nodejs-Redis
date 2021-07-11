const redis = require("redis")

redisClient = redis.createClient(process.env.REDIS_PORT)

function setResponse(username, repos) {
    return `<h2>${username} has ${repos} Github repos</h2>`;
}

exports.GetRepoDetails = async function (res,req,next,username){
    try {
        console.log('Getting Repo Details');
        //call getCache using redis object

        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        const repos = data.public_repos;

        // call setCache using redis object
        res.send(setResponse(username, repos));

    } catch (err) {
        console.error(err);
        res.send(err);
    }

}