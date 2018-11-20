var async = require('async');
var githubApi = require('@octokit/rest');

var github = new githubApi({
    version: '3.0.0'
});


async.waterfall([
    function getUserAvatar(callback) {

        github.search.users({ q: 'airbnb' }, (err, res) => {
            if (err) {
                callback(err, null);
                return;
            }
            console.info(res.data.items[0]['avatar_url'])
            var avatarUrl = res.data.items[0]['avatar_url'];
            callback(null, avatarUrl)
        })

    },
    function wrapAavatarHtml(avatarUrl, callback) {
        var avatarWithHtml = '<img src=' + avatarUrl + '/>';
        callback(null, avatarWithHtml)
    }
], (error, result) => {

    if (error) {
        console.error(error);
        return;
    }

    console.log(result);
})

