'use strict';

var test = require('../test');

test({ TERM: 'Eterm' }, 4);
test({ TERM: 'Cons25' }, 4);
test({ TERM: 'Console' }, 4);
test({ TERM: 'Cygwin' }, 4);
test({ TERM: 'Dtterm' }, 4);
test({ TERM: 'Gnome' }, 4);
test({ TERM: 'Hurd' }, 4);
test({ TERM: 'Jfbterm' }, 4);
test({ TERM: 'Konsole' }, 4);
test({ TERM: 'Kterm' }, 4);
test({ TERM: 'Mlterm' }, 4);
test({ TERM: 'Putty' }, 4);
test({ TERM: 'St' }, 4);
test({ TERM: 'Rxvt-Unicode-24bit' }, 24);
test({ TERM: 'Terminator' }, 24);

test({ TERM: '*-ANSI-*' }, 4);
test({ TERM: '*-Color-*' }, 4);
test({ TERM: '*-Linux-*' }, 4);
test({ TERM: 'Con10x9yyy' }, 4);
test({ TERM: 'Rxvt-xxx' }, 4);
test({ TERM: 'Screen-xxx' }, 4);
test({ TERM: 'Xterm-xxx' }, 4);
test({ TERM: 'Vt100-xxx' }, 4);

test({ TERM: 'xterm-256-xxx' }, 8);
