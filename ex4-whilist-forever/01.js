var async = require('async');

var counter = 0;

async.whilst(

    function testcondition() {
        return counter < 5
    },
    function name(callback) {
        counter++;
        console.log('counter', counter);
        setTimeout(callback, 1000);
        // setTimeout(callback('err'), 1000);

    },
    function callback(err) {
        if (err) {
            console.log(err);
            return
        }

        console.log('job complete');

    }

)