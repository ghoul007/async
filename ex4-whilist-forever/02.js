var async = require('async');

var targetNumber = 0;


async.forever(
    function check(callback) {
        targetNumber++;
        if (targetNumber == 5000) {
            callback('targer reached ..stopping forever')
        } else {
            console.log(targetNumber)
            callback()
        }

    },
    function finish(err) {
        if (err) {
            console.log(err)
        }
    }
)