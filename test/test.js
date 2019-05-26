'use strict';

var getColorDepth = require('..');
var assert = require('assert');
var tty = require('tty');
var assign = require('@fav/prop.assign');

function test(env, expected) {
  assert.equal(getColorDepth(env), expected);

  if (process.platform !== 'win32' && env.OS !== 'Windows_NT') {
    // tty.WriteStream.getColorDepth was implememented since nodejs v9.9.
    // But before v11, this function's behavior is slightly different from
    // the latest.
    // if (tty.WriteStream.prototype.getColorDepth) {
    var versions = /^v([0-9]+)\.([0-9]+)\.([0-9]+)/.exec(process.version)
      .slice(1, 4)
      .map(Number);
    if (versions[0] >= 11) {
      assert.equal(getColorDepth(env),
        tty.WriteStream.prototype.getColorDepth(env));
    }
  }
}

module.exports = test;
