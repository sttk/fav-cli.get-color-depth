'use strict';

// This program is created referencing the following code:
// `https://github.com/nodejs/node/blob/master/lib/internal/tty.js`

var os = require('os');

var TERMS_IGNORECASE = {
  eterm:      4,
  cons25:     4,
  console:    4,
  cygwin:     4,
  dtterm:     4,
  gnome:      4,
  hurd:       4,
  jfbterm:    4,
  konsole:    4,
  kterm:      4,
  mlterm:     4,
  putty:      4,
  st:         4,
  'rxvt-unicode-24bit': 24,
  terminator: 24,
};

var TERMS_REGEXP = [
  [/^xterm-256/, 8],
  [/ansi/i,      4],
  [/color/i,     4],
  [/linux/i,     4],
  [/^con[0-9]*x[0-9]/i, 4],
  [/^rxvt/i,     4],
  [/^screen/i,   4],
  [/^xterm/i,    4],
  [/^vt100/i,    4],
];


function getColorDepth(env) {
  env = env || process.env;

  return forceColor(env) ||
         disableColor(env) ||
         colorDepthOnCi(env) ||
         colorDepthOnWindows(env) ||
         colorDepthOnMacos(env) ||
         colorDepthOnUnix(env) ||
         1;
}

function forceColor(env) {
  if (env.FORCE_COLOR !== undefined) {
    switch (env.FORCE_COLOR) {
      case '':
      case '1':
      case 'true': {
        return 4;
      }
      case '2': {
        return 8;
      }
      case '3': {
        return 24;
      }
      default: {
        return 1;
      }
    }
  }
}

function disableColor(env) {
  if (env.NODE_DISABLE_COLORS !== undefined ||
      env.NO_COLOR !== undefined ||
      env.TERM === 'dumb') {
    return 1;
  }
}

function colorDepthOnCi(env) {
  if (env.CI) {
    if ('TRAVIS' in env ||
        'CIRCLECI' in env ||
        'APPVEYOR' in env ||
        'GITLAB_CI' in env ||
        env.CI_NAME === 'codeship') {
      return 8;
    }
    return 1;
  }
  if ('TEAMCITY_VERSION' in env) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 4 : 1;
  }
}

function colorDepthOnWindows(env) {
  if (env.OS === 'Windows_NT') {
    var osRelease = os.release().split('.');
    var osVersion = parseInt(osRelease[0], 10);
    var osBuild = parseInt(osRelease[2], 10);
    if (osVersion >= 10) {
      if (osBuild >= 14931) {
        return 24;
      }
      if (osBuild >= 10586) {
        return 8;
      }
    }
    return 4;
  }
}

function colorDepthOnMacos(env) {
  switch (env.TERM_PROGRAM) {
    case 'iTerm.app': {
      if (!env.TERM_PROGRAM_VERSION ||
          /^[0-2]\./.test(env.TERM_PROGRAM_VERSION)) {
        return 8;
      }
      return 24;
    }
    case 'HyperTerm':
    case 'Hyper':
    case 'MacTerm': {
      return 24;
    }
    case 'Apple_Terminal': {
      return 8;
    }
  }
}

function colorDepthOnUnix(env) {
  if (env.TMUX) {
    return 8;
  }
  if (env.TERM) {
    var term = TERMS_IGNORECASE[env.TERM.toLowerCase()];
    if (term != null) {
      return term;
    }
    for (var i = 0, n = TERMS_REGEXP.length; i < n; i++) {
      if (TERMS_REGEXP[i][0].test(env.TERM)) {
        return TERMS_REGEXP[i][1];
      }
    }
  }
  if (env.COLORTERM) {
    if (env.COLORTERM === 'truecolor' || env.COLORTERM === '24bit') {
      return 24;
    }
    return 4;
  }
}

module.exports = getColorDepth;
