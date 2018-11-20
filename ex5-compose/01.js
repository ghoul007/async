var async = require('async');

function addFive(num, callback) {
    callback(null, num + 5)
}

function timesTen(num, callback) {
    callback(null, num * 10)
}

var calcule = async.compose(addFive, timesTen); //55
var calcule = async.seq(addFive, timesTen); //100

calcule(5, function (err, result) {
    console.log(result)
})