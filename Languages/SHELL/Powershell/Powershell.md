---
tags:
  - scripting
  - language
  - interpreter
aliases:
  - powershell.exe
---
Scripting language, command line interpreter and terminal for [[Windows]].
Successor to [[batch]].
This scripting language isn't case sensitive.

- [Thread on running scripts – Reddit](https://www.reddit.com/r/PowerShell/comments/m3hyn0/how_do_i_run_a_ps1_file_in_power_shell_by_simply/) ^reddit

---

### Cmdlets

- `get-command`
	- returns every command/executable available in that directory's scope, including the ones in the system's [[Windows#^path|path]]
	- `get-command commandname`
		- tells you where that command comes from in the file system
		- works with any command/executable that works in the current directory
	- `get-command -name *stringtolookfor*`
		- tells you about every command with `stringtolookfor` in their name

---

### .ps1 files