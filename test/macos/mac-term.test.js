'use strict';

var test = require('../test');

test({ TERM: 'xterm' }, 4);

test({ TERM: 'xterm', TERM_PROGRAM: 'MacTerm' }, 24);
