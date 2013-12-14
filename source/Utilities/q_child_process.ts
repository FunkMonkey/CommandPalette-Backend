/// <reference path="../../declarations/node.d.ts" />
/// <reference path="../../declarations/q.d.ts" />

import Q = require("q");
var node_exec = require('child_process').exec;

export interface IExecResult {
	// TODO: find better types
	error: Error;
	stdout: string;
	stderr: string;
}

export function exec(command: string, options?: Object) {
	var deferred = Q.defer<IExecResult>();
	
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