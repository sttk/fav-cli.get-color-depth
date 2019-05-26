'use strict';

var test = require('../test');

test({ TERM: 'xterm' }, 4);
test({ TERM: 'xterm', CI: '1' }, 1);

test({ TERM: 'xterm', CI: '1', CIRCLECI: '1' }, 8);
