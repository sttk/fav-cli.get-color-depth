'use strict';

var test = require('../test');

// env.FORCE_COLOR takes precedence over all env variables.

test({ NODE_DISABLE_COLORS: '1' }, 1);
test({ NODE_DISABLE_COLORS: '1', FORCE_COLOR: '0' }, 1);
test({ NODE_DISABLE_COLORS: '1', FORCE_COLOR: '1' }, 4);
test({ NODE_DISABLE_COLORS: '1', FORCE_COLOR: '2' }, 8);
test({ NODE_DISABLE_COLORS: '1', FORCE_COLOR: '3' }, 24);
test({ NODE_DISABLE_COLORS: '1', FORCE_COLOR: '' }, 4);
test({ NODE_DISABLE_COLORS: '1', FORCE_COLOR: 'true' }, 4);

test({ TMUX: '1' }, 8);
test({ TMUX: '1', FORCE_COLOR: '0' }, 1);
test({ TMUX: '1', FORCE_COLOR: '1' }, 4);
test({ TMUX: '1', FORCE_COLOR: '2' }, 8);
test({ TMUX: '1', FORCE_COLOR: '3' }, 24);
test({ TMUX: '1', FORCE_COLOR: '' }, 4);
test({ TMUX: '1', FORCE_COLOR: 'true' }, 4);

test({ CI: '1' }, 1);
test({ CI: '1', FORCE_COLOR: '0' }, 1);
test({ CI: '1', FORCE_COLOR: '1' }, 4);
test({ CI: '1', FORCE_COLOR: '2' }, 8);
test({ CI: '1', FORCE_COLOR: '3' }, 24);
test({ CI: '1', FORCE_COLOR: '' }, 4);
test({ CI: '1', FORCE_COLOR: 'true' }, 4);

test({ TERM_PROGRAM: 'MacTerm' }, 24);
test({ TERM_PROGRAM: 'MacTerm', FORCE_COLOR: '0' }, 1);
test({ TERM_PROGRAM: 'MacTerm', FORCE_COLOR: '1' }, 4);
test({ TERM_PROGRAM: 'MacTerm', FORCE_COLOR: '2' }, 8);
test({ TERM_PROGRAM: 'MacTerm', FORCE_COLOR: '3' }, 24);
test({ TERM_PROGRAM: 'MacTerm', FORCE_COLOR: '' }, 4);
test({ TERM_PROGRAM: 'MacTerm', FORCE_COLOR: 'true' }, 4);

test({ TERM: 'xterm' }, 4);
test({ TERM: 'xterm', FORCE_COLOR: '0' }, 1);
test({ TERM: 'xterm', FORCE_COLOR: '1' }, 4);
test({ TERM: 'xterm', FORCE_COLOR: '2' }, 8);
test({ TERM: 'xterm', FORCE_COLOR: '3' }, 24);
test({ TERM: 'xterm', FORCE_COLOR: '' }, 4);
test({ TERM: 'xterm', FORCE_COLOR: 'true' }, 4);

test({ COLORTERM: 'truecolor' }, 24);
test({ COLORTERM: 'truecolor', FORCE_COLOR: '0' }, 1);
test({ COLORTERM: 'truecolor', FORCE_COLOR: '1' }, 4);
test({ COLORTERM: 'truecolor', FORCE_COLOR: '2' }, 8);
test({ COLORTERM: 'truecolor', FORCE_COLOR: '3' }, 24);
test({ COLORTERM: 'truecolor', FORCE_COLOR: '' }, 4);
test({ COLORTERM: 'truecolor', FORCE_COLOR: 'true' }, 4);

