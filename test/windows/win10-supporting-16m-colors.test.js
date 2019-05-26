'use strict';

var test = require('../test');
var  os = require('os');

os.release = function() {
  return '10.0.14931';
};

test({ OS: 'Windows_NT' }, 24);
