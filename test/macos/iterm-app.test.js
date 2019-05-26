'use strict';

var test = require('../test');

test({ TERM: 'xterm' }, 4);

test({ TERM: 'xterm', TERM_PROGRAM: 'iTerm.app' }, 8);

test({
  TERM: 'xterm',
  TERM_PROGRAM: 'iTerm.app',
  TERM_PROGRAM_VERSION: '2.99.99',
}, 8)

test({
  TERM: 'xterm',
  TERM_PROGRAM: 'iTerm.app',
  TERM_PROGRAM_VERSION: '3.0.0',
}, 24)
