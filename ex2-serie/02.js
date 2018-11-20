var async = require('async');
var githubApi = require('@octokit/rest');

var github = new githubApi({
    version: '3.0.0'
});


async.series([
function functionOne(callback){
    callback(null,'result1')
},
function functionTwo(callback){
    setTimeout(()=>{
        callback("null",'result2')

    },2000)
},
function functionThree(callback){
    callback(null,'result3')
}

], (err,result)=>{
console.log(result)
})