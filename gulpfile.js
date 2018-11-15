const gulp = require('gulp')
const Bundler = require('parcel-bundler')

async function bundle (options) {
  process.env.BUILD_AS = options.buildAs
  const bundler = new Bundler('src/*', {
    outDir: 'build',
    cache: true,
    minify: false,
    watch: false,
  })
  return bundler.bundle()
}
gulp.task('website', () => {
  return bundle({  buildAs: 'website' })
})
gulp.task('extension', () => {
  return bundle({  buildAs: 'extension' })
})
