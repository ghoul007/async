var async = require('async');
var _ = require('lodash');

var tasksList = _.times(10, _.uniqueId.bind(null, 'task_'))

var taskQueue = async.queue(function (task, callback) {
    console.log('Performing task', task.name);
    console.log('waiting to be processed', taskQueue.length())
    // if(task.name == 'task_1')
    // eval(task.name+'()')
    // setTimeout(() => {
    //     callback();
    // }, 1000)

    test(task.name, callback);

}, 5)


taskQueue.drain = function () {
    console.log('all items have been processed');
}

_.each(tasksList, function (task) {
    taskQueue.push({ name: task }, function (err) {
        if (err) {
            console.log(err);
        }
    })
})


// taskQueue.unshift({ name: "Most important task" }, function (err) {
// if (err) {
// console.log(err)
// }
// })

var test = function (name, callback) {
    switch (name) {
        case 'task_1': task_1(callback); break;
        case 'task_2': task_2(callback); break;
        case 'task_3': task_3(callback); break;
        case 'task_4': task_4(callback); break;
        case 'task_5': task_5(callback); break;
        case 'task_6': task_6(callback); break;
        case 'task_7': task_7(callback); break;
        case 'task_8': task_8(callback); break;
        case 'task_9': task_9(callback); break;
        case 'task_10': task_10(callback); break;

        default:
            break;
    }
}



var task_1 = function (callback) {
    console.log('*********** function task1')
    callback();
}

var task_2 = function (callback) {
    setTimeout(() => {
        console.log('*********** function task2')
        callback();
    }, 5000)
}

var task_3 = function (callback) {

    setTimeout(() => {
        console.log('*********** function task3')
        callback();

    }, 3000)
}

var task_4 = function (callback) {
    console.log('*********** function task4')
    callback();
}

var task_5 = function (callback) {
    console.log('*********** function task5')
    callback();
}

var task_6 = function (callback) {
    console.log('*********** function task6')
    callback();
}

var task_7 = function (callback) {
    console.log('*********** function task7')
    callback();
}

var task_8 = function (callback) {
    console.log('*********** function task8')
    callback();
}

var task_9 = function (callback) {
    console.log('*********** function task9')
    callback();
}

var task_10 = function (callback) {
    console.log('*********** function task10')
    callback();
}
// console.log(tasksList)