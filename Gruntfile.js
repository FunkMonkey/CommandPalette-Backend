module.exports = function(grunt) {
	

	// using require instead of loadNpmTasks, so we can use the grunt tasks from the parent dirs
	require('grunt-contrib-watch/tasks/watch')(grunt);
	require('grunt-typescript/tasks/typescript')(grunt);
	//grunt.loadNpmTasks('grunt-tslint');
	
	// Project configuration.
	grunt.initConfig({
		
		typescript: {
			base: {
				src: ['source/**/*.ts'],
				dest: 'lib',
				options: {
					module: 'commonjs', //or commonjs
					target: 'es5', //or es3
					base_path: 'source',
					sourcemap: false,
					declaration: false
				}
			},

			declarations: {
				src: ['source/**/*.ts'],
				dest: 'lib',
				options: {
					module: 'commonjs', //or commonjs
					target: 'es5', //or es3
					base_path: 'source',
					sourcemap: false,
					declaration: true
				}
			}
		},

		/*tslint: {
			options: {
				configuration: {
					curly: true,
					quotemark: true,
					"no-eval": true
				} //grunt.file.readJSON(".tslintrc")
			},
			files: {
				src: [ 'source/test.ts' ]
			}
		},*/
		
		watch:{
			typescript: {
				files: [ 'source/**/*.ts'],
				tasks: ['typescript']
			}
		}
	});
	
	grunt.registerTask('default', [ 'typescript', 'watch' ]);
};