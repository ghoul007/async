var async = require('async');
var _ = require('lodash')

var taskList = _.times(10, _.uniqueId.bind(null, 'task_'));
var taskCargo = async.cargo(function (tasks, callback) {
    for (var i = 0; i < tasks.length; i++) {
        console.log('working on' + tasks[i].name)
    }
    callback()
}, 3)

_.each(taskList, function (task) {
    taskCargo.push({ name: task }, function (err) {
        if (err) {
            console.log(err);
            return;
        }

        console.log('task'+ task +'is done')
    })
})