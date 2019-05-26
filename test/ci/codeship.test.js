'use strict';

var test = require('../test');

test({ TERM: 'xterm' }, 4);
test({ TERM: 'xterm', CI: '1' }, 1);

test({ TERM: 'xterm', CI: '1', CI_NAME: 'codeship' }, 8);
