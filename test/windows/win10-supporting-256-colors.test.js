'use strict';

var test = require('../test');

var os = require('os');

os.release = function() {
  return '10.0.10586';
};

test({ OS: 'Windows_NT' }, 8);

os.release = function() {
  return '10.0.14930';
};

test({ OS: 'Windows_NT' }, 8);
