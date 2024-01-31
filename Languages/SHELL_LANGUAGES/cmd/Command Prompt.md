---
tags:
  - scripting
  - language
aliases:
  - cmd
  - batch
---
---

### Syntax

- `executablename`
	- runs the executable
	- it has a `.exe` extension but you can ~~and should~~ omit it
	- `"executable name if it has spaces"`
		- needs the quotation marks
- `command && aftercommand`
	- execute `command` and `aftercommand` after
- `command | othercommand`
	- the output of `command` becomes the input of `othercommand`
	- by _input_ and _output_ I'm talking about when the programs write in the console window.
	- That normally happens through streams called [[C#^stdin|stdin]] and [[C#^stdout|stdout]] (they'll have other names in other languages but it's still them)
	- to make programs communicate in fancier ways look into [[IPC]]
- `%CD%`
	- current directory
- `@command`
	- don't echo this command to the console

---

### Batch files

- **Info:**
	- they have a `.bat` or `.cmd` extension
	- virtually identical
- **Example batch files:**
	```batch
	@echo off
	echo print something
	pause
	```

---

![[Windows#^commands]]

---

### Trivia

- `.bat` was [[MS-DOS]]'s original batch file. `.cmd` is modern. `.bat` is backwards compatible with MS-DOS, so if you need your file to be, use that (~~you absolutely won't fucking need to, I promise~~)
- they're basically identical though on Windows versions beyond 2000
- `.cmd` was introduced with [[Windows NT]]
- both processe