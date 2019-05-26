'use strict';

var test = require('../test');

test({}, 1);

test({ COLORTERM: '256colors' }, 4);
test({ COLORTERM: 'truecolor' }, 24);
test({ COLORTERM: '24bit' }, 24);
