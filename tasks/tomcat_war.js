/*
 * grunt-tomcat-deploy
 * https://github.com/elebescond/grunt-tomcat-deploy
 *
 * Copyright (c) 2013 Erwan Le Bescond
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var tomcat = grunt.config('tomcat_deploy');
  if(tomcat === undefined)
    return
  var archive = tomcat.dist + '.war';

  grunt.loadNpmTasks('grunt-zip');

  grunt.config('zip', {
    war: {
      cwd: tomcat.src,
      dest: archive,
      src: [tomcat.src + '/**']
    }
  });

  grunt.registerTask('tomcat_war', ['zip:war']);

};
