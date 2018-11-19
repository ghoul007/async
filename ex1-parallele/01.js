var async = require('async');
var stack = [];

var fctOne = function (callback) {
    setTimeout(() => {
    callback(null, 'First function')
}, 3000)
}

var fctTwo = function (callback) {
        callback("eeor", null)
}

var fctThree = function (callback) {

    callback(null, 'Third function')
}

stack.push(fctOne)
stack.push(fctTwo)
stack.push(fctThree)


async.parallel(stack, (err, result) => {
    console.log(result)
})


