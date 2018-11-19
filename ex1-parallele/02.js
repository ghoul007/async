var async = require('async');
var stack = {}

stack.getUserName = function (callback) {
    var userName = 'Ahmed';
    callback (null, userName)
}

stack.getUserAge = function (callback) {
    var age = 20;
    setTimeout(()=>{
        callback (null, age)
    },2000)
}

stack.getGender = function (callback) {
    var gender = "male";
    callback (null, gender)
}

async.parallel(stack, (err, result) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(result)
})
