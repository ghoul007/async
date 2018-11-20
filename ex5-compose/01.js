var async = require('async');

function addFive(num, callback) {
    callback(null, num + 5)
}

function timesTen(num, callback) {
    callback(null, num * 10)
} console.log(result)

var calcule = async.compose(addFive, timesTen);

calcule(5, function (err, result) {

})