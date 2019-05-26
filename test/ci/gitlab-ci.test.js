'use strict';

var test = require('../test');

test({ TERM: 'xterm' }, 4);
test({ TERM: 'xterm', CI: '1' }, 1);

test({ TERM: 'xterm', CI: '1', GITLAB_CI: '1' }, 8);
