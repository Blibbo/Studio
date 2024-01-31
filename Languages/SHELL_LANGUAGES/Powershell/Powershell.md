---
tags:
  - scripting
  - language
  - interpreter
---
---

### About powershell

- not case sensitive

---

### Cmdlets

- `get-command`
	- returns every command/executable available in that directory's scope
	- including the ones in the system's [[Windows#^path|path]]
	- variations:
		- `get-command commandname`
			- works with any command/executable that works in the current directory
			- tells you where that command comes from in the file system
		- `get-command -name *stringtolookfor*`
			- tells you about every command with `stringtolookfor` in their name

---

### .ps1 files