---
aliases:
  - read-eval-print loop
  - interactive toplevel
  - language shell
  - scripting language shell
  - REPLs
---
**REPL** (**read-eval-print loop**) is a way to construct [[program|programs]].

The way these programs work is they read one token from [[standard input]], evaluate it (calculate what it returns), write the returned value to their [[standard output]] and then repeat the process indefinitely, continuously waiting for new expressions to read, until some kind of signal is sent to stop them ~~or, in human words, they have an "exit" command~~

They get also called **language shells** because these kinds of programs get used a lot as [[CLI]]s for [[scripting language|scripting languages]]

https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop

## Disambiguation

[[shell|command processors]] such as [[cmd.exe]] are **not** REPLs. The distinction is that if you write "2+2" to any REPL, it _will_ write "4" to the output immediately. [[powershell]] _is_ a REPL because it _does_ say "4" if you write "2+2".