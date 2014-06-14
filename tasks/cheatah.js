/*
 * grunt-cheatah
 *
 *
 * Copyright (c) 2014 Masaaki Morishita
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {


    grunt.registerMultiTask('cheatah', 'grunt plugin for Cheatah styleguide generator', function () {
        var fs = require('fs')
        var Cheatah = require('cheatah')

        var options = this.options({
            punctuation: '.',
            separator: ', '
        });

        this.files.forEach(function (file) {
            var src = file.src.filter(function (filepath) {
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function (filepath) {
                var cheatah = new Cheatah(filepath)
                cheatah.build()
            }).join(grunt.util.normalizelf(options.separator));

            grunt.file.write(file.dest, src);

            grunt.log.writeln('File "' + file.dest + '" created.');
        });
    });

};
