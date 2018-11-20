var async = require('async');

async.auto({
    get_username: function (callback) {
        console.log('in get username');
        callback(null, 'ahmed')
    },
    connect_to_db: function (callback) {
        console.log('in connect db');
        var connected = true;

        if (connected) {
            connected = true;
            callback(null, connected)
        } else {
            callback('Error Connect to db', null)
        }
    },
    check_if_user_exist: ['get_username', 'connect_to_db', function (results, callback) {
        console.log('in check if user exit', JSON.stringify(results));
        var userExist = false;
        if (userExist) {
            callback('user aleready exist in db')
        } else {
            setTimeout(function () {
                callback(null, !userExist)
            }, 1000)
        }

    }],

    sign_up: ['check_if_user_exist', function (result, callback) {

        console.log('in signup', JSON.stringify(result));

        var username = result.get_username;
        var isDBConnected = result.connect_to_db
        var userExists = result.check_if_user_exist

        if (username && isDBConnected && userExists) {
            callback(null, { status: '200', msg: 'successfully signed up user' })
        } else {
            callback('Error signup user', false)
        }

    }],

    persist_to_db: ['sign_up', async.retry({ times: 3, interval: 1000 }, function (callback, results) {
        callback(null, 'successfully ersisted to DB')
    })]
}, function (err, results) {
    console.log('error= ', err)
    console.log('results= ', results)
})
