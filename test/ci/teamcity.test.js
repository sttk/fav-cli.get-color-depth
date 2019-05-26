'use strict';

var test = require('../test');

test({ TERM: 'xterm' }, 4);

test({ TERM: 'xterm', TEAMCITY_VERSION: '8.999.999' }, 1);
test({ TERM: 'xterm', TEAMCITY_VERSION: '9.000.999' }, 1);

test({ TERM: 'xterm', TEAMCITY_VERSION: '9.001.000' }, 4);
test({ TERM: 'xterm', TEAMCITY_VERSION: '9.999.999' }, 4);
test({ TERM: 'xterm', TEAMCITY_VERSION: '10.000.000' }, 4);
