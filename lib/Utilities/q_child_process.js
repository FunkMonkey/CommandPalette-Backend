var Q = require("q");
var node_exec = require('child_process').exec;

exports.exec = function exec(command, options) {
	var deferred = Q.defer();
	
	var childProcess = node_exec(command, options,
		function (error, stdout, stderr) {
			deferred.resolve({
				error: error,
				stdout: stdout,
				stderr: stderr
			});
		});

	return deferred.promise;
};