gulp     = require 'gulp'
composer = require 'gulp-composer'
shell    = require 'gulp-shell'

config =
  src: 'satis.json'
  dest: 'dist'
  deploy:
    user: 'goblinde'
    host: 'composer.goblindegook.net'
    path: 'public_html/composer/'

gulp.task 'composer', ->
  composer()

gulp.task 'build', ['composer'], shell.task [
  "vendor/bin/satis build #{config.src} #{config.dest}"
]

gulp.task 'deploy', shell.task [
  "rsync -a --delete #{config.dest} #{config.deploy.user}@#{config.deploy.host}:#{config.deploy.path}"
]
