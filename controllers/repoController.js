const getRepos = require("../services/repoService")

exports.FindUser = async function (req, res) {

    let repoDetails
    let  username  = req.params.username;
    console.log(`fetching details for user: ${username}`)

    if (username === "") {
        console.log("Username is Empty, please provide valid username")
        res.json("Username Empty")
        return
    }else {
        try {
            repoDetails = await getRepos.GetRepoDetails(username)
            console.log("from controller: ",repoDetails)
        } catch (e) {
            console.log("Error from GetRepoDetails",e)
        }

    }
    console.log("GetRepoDetails Success")
    res.json(repoDetails)
    return
}