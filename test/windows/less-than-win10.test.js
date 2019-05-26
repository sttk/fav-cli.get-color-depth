'use strict';

var test = require('../test');

var os = require('os');

os.release = function() {
  return '9.9.999999';
};

test({ OS: 'Windows_NT' }, 4);
