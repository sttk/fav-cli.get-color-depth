'use strict';

var getColorDepth = require('../../');
var tty = require('tty');
var assert = require('assert');

if (typeof tty.WriteStream.prototype.getColorDepth === 'function') {
  assert.equal(getColorDepth(), tty.WriteStream.prototype.getColorDepth());
}
