---
tags:
  - web-development
  - back-end
  - scripting
  - preprocessor
  - language
---


- [Reddit thread on why PHP is hated](https://www.reddit.com/r/PHP/comments/1fy71s/why_do_so_many_developers_hate_php/) ^reddit

## Functions

### Debugging

- `{php}exit($variable);` ^exit
	- stops execution and returns to stream
	- it's a language construct
- `{php}die($variable);`
	- same as exit
	- it was added in PHP 4 as a shorthand for [[#^exit|exit]]
	- saved 1 fucking keystroke
- `{php}var_dump($variable);` returns to stream without stopping execution
- `{php}gettype($variable);` returns the variable's type