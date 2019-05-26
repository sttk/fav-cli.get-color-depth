'use strict';

var test = require('../test');

// env.NODE_DISABLE_COLORS takes precedence over all env variables except
// env.FORCE_COLOR.


test({ TMUX: '1' }, 8);
test({ TMUX: '1', NODE_DISABLE_COLORS: '1' }, 1);

test({ CI: '1', TRAVIS: '1' }, 8);
test({ CI: '1', TRAVIS: '1', NODE_DISABLE_COLORS: '1' }, 1);

test({ TERM_PROGRAM: 'MacTerm' }, 24);
test({ TERM_PROGRAM: 'MacTerm', NODE_DISABLE_COLORS: '1' }, 1);

test({ TERM: 'xterm' }, 4);
test({ TERM: 'xterm', NODE_DISABLE_COLORS: '1' }, 1);

test({ COLORTERM: 'truecolor' }, 24);
test({ COLORTERM: 'truecolor', NODE_DISABLE_COLORS: '1' }, 1);

