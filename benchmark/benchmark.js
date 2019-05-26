'use strict';

const BenchmarkTester = require('benchmark-tester')
const tty = require('tty')

new BenchmarkTester()
  .addPackage('tty API', tty.WriteStream.prototype.getColorDepth)

  .addTest('tty API', (getColorDepth, env) => {
    return getColorDepth(env)
  })
  .addTest('@fav/cli.get-color-depth', (getColorDepth, env) => {
    return getColorDepth(env)
  })

  .runTest('env.FORCE_COLOR', { FORCE_COLOR: '3' })
  .runTest('env.NO_COLOR', { NO_COLOR: '1' })
  .runTest('env.CI', { TERM: 'xterm', CI: '1' })
  .runTest('env.TRAVIS', { TERM: 'xterm', CI: '1', TRAVIS: '1' })
  .runTest('macOS iTerm.app', { TERM_PROGRAM: 'iTerm.app' })
  .runTest('env.TERM = dumb', { TERM: 'dumb' })
  .runTest('env.TERM = dtterm', { TERM: 'dtterm' })
  .runTest('env.TERM = xterm-256color', { TERM: 'xterm-256color' })
  .runTest('env.TERM = VT100-xxx', { TERM: 'VT100-xxx' })
  .runTest('env.COLORTERM = truecolor', { COLORTERM: 'truecolor' })

  .print()
