const getRepos = require("../services/repoService")

exports.FindUser = function fu(res, req) {

    const username  = req.params

    if (username === "") {
        console.log("Username is Empty, please provide valid username")
    }else {

        let repoDetails
        try {
            repoDetails = getRepos.GetRepoDetails(username)
        } catch (e) {
            console.log("Error from GetRepoDetails",e)
        }
        res.send(repoDetails)
    }
}