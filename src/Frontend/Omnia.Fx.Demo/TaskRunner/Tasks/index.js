var glob = require('../../node_modules/glob')
processPath = process.cwd().replace(/\\/g, "/");

require('../../node_modules/@omnia/tooling/index');

loadTasks();

function loadTasks() {
    var files = glob.sync('TaskRunner/Tasks/**/task.js')
    var directories = [];
    for (var i = 0; i < files.length; i++) {
        require(processPath + '/' + files[i]);
    }
}