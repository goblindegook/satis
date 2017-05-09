const gulp = require('gulp')
const composer = require('gulp-composer')
const shell = require('gulp-shell')
const del = require('del')

const config = {
  src: 'satis.json',
  dest: 'dist',
  deploy: {
    user: 'goblinde',
    host: 'composer.goblindegook.net',
    path: 'public_html/composer/'
  }
}

gulp.task('clean', () => del([config.dest]))

gulp.task('composer', () => composer())

gulp.task('deploy', shell.task([
  `rsync -av --delete ${config.dest}/ ${config.deploy.user}@${config.deploy.host}:${config.deploy.path}`
]))

gulp.task('build', ['composer'], shell.task([
  `vendor/bin/satis build ${config.src} ${config.dest}`
]))

gulp.task('default', ['build'])
