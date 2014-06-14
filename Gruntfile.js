/*
 * grunt-cheatah
 *
 *
 * Copyright (c) 2014 Masaaki Morishita
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    clean: {
      tests: ['tmp']
    },

    cheatah: {
      build: {
        files: {
          'tmp/cheatah.html': ['test/fixture.css']
        }
      }
    }
  });

  grunt.loadTasks('tasks');

  grunt.registerTask('test', ['clean', 'cheatah:build']);
  grunt.registerTask('default', ['jshint', 'test']);

};
