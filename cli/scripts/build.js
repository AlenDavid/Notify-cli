const args = require("args");
const glob = require("glob");

args
.option('watch', 'Watch mode: rebuild on file system changes', false)
.option('outdir', 'The output directory', "./dist")

const { watch, outdir } = args.parse(process.argv)
const minify = process.env.ENV == "production"
const entryPoints = glob.sync('./src/**/*.ts').filter(file => !file.match(/(spec|test)/))

require('esbuild').build({
    entryPoints,
    minify,
    watch,
    outdir,
    platform: 'node',
    bundle: true,
    logLevel: "info"
  })
  .then(() => {
    if(!watch) {
      process.exit(0)
    }
  })
  .catch(() => process.exit(1))
