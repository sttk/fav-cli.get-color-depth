'use strict';

var test = require('../test');

test({ TERM: 'xterm' }, 4);

test({ TERM: 'xterm', TMUX: '1' }, 8);
