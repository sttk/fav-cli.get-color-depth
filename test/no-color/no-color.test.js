'use strict';

var test = require('../test');

// env.NO_COLOR takes precedence over all env variables except env.FORCE_COLOR.


test({ TMUX: '1' }, 8);
test({ TMUX: '1', NO_COLOR: '1' }, 1);

test({ CI: '1', TRAVIS: '1' }, 8);
test({ CI: '1', TRAVIS: '1', NO_COLOR: '1' }, 1);

test({ TERM_PROGRAM: 'MacTerm' }, 24);
test({ TERM_PROGRAM: 'MacTerm', NO_COLOR: '1' }, 1);

test({ TERM: 'xterm' }, 4);
test({ TERM: 'xterm', NO_COLOR: '1' }, 1);

test({ COLORTERM: 'truecolor' }, 24);
test({ COLORTERM: 'truecolor', NO_COLOR: '1' }, 1);

