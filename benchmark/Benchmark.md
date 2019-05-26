# Benchmark of @fav/cli.get-color-depth

Comparing with following modules:

* [tty.WriteStram.prototype.getColorDepth](https://nodejs.org/api/tty.html#tty_writestream_getcolordepth_env)

## v 0.1.0

|                           | tty API            | @fav/cli.get-color-depth(0.1.0) |
|:--------------------------|-------------------:|--------------------------------:|
| env.FORCE_COLOR           | 87,308,521 ops/sec |             686,103,658 ops/sec |
| env.NO_COLOR              | 22,350,422 ops/sec |             691,417,721 ops/sec |
| env.CI                    |  8,351,003 ops/sec |             697,218,451 ops/sec |
| env.TRAVIS                |  7,919,769 ops/sec |             696,280,982 ops/sec |
| macOS iTerm.app           |  5,990,902 ops/sec |             695,002,178 ops/sec |
| env.TERM = dumb           | 14,190,584 ops/sec |             688,462,284 ops/sec |
| env.TERM = dtterm         |  4,250,604 ops/sec |             243,101,227 ops/sec |
| env.TERM = xterm-256color |  4,177,244 ops/sec |               9,150,553 ops/sec |
| env.TERM = VT100-xxx      |  1,181,159 ops/sec |               1,682,163 ops/sec |
| env.COLORTERM = truecolor |  5,374,944 ops/sec |             669,881,039 ops/sec |

- Platform: Node.js 12.2.0 on Darwin 64-bit
- Machine: Intel(R) Core(TM) i7-2620M CPU @ 2.70GHz, 16GB