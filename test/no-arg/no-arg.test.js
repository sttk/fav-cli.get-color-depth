'use strict';

var getColorDepth = require('../../');
var tty = require('tty');
var assert = require('assert');

// tty.WriteStream.getColorDepth was implememented since nodejs v9.9.
// But before v11, this function's behavior is slightly different from
// the latest.
// if (tty.WriteStream.prototype.getColorDepth) {
var versions = /^v([0-9]+)\.([0-9]+)\.([0-9]+)/.exec(process.version)
  .slice(1, 4)
  .map(Number);
if (versions[0] >= 11) {
  assert.equal(getColorDepth(), tty.WriteStream.prototype.getColorDepth());
}
