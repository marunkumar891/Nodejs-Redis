const fetch = require('node-fetch');

function setResponse(username, repos) {
    return `<h2>${username} has ${repos} Github repos</h2>`;
}

exports.GetRepoDetails = async (username) => {

    console.log('Getting Repo Details');
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    const repos = data.public_repos;

    return (repos)

}