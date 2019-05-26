'use strict';

var test = require('../test');

// env.TERM == 'dumb' takes precedence over all env variables except
// env.FORCE_COLOR.


test({ TMUX: '1' }, 8);
test({ TMUX: '1', TERM: 'dumb' }, 1);

test({ CI: '1', TRAVIS: '1' }, 8);
test({ CI: '1', TRAVIS: '1', TERM: 'dumb' }, 1);

test({ TERM_PROGRAM: 'MacTerm' }, 24);
test({ TERM_PROGRAM: 'MacTerm', TERM: 'dumb' }, 1);

test({ TERM: 'dumb' }, 1);

test({ COLORTERM: 'truecolor' }, 24);
test({ COLORTERM: 'truecolor', TERM: 'dumb' }, 1);

