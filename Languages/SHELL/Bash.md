---
tags:
  - scripting
  - language
  - interpreter
aliases:
  - GNU Bash
  - Bourne Again Shell
---
**Bash** is the [[open source|open-source]] version of the [[SH|Bourne Shell]].
It's part of the [[GNU|GNU Project]].

Bash is the default shell on some Unix-like systems, such as [[Linux]] and [[macOS]], and it runs whenever you execute `{bash}sh`

---

## Bash vs the [[SH|Bourne Shell]]

Bash is a superset of the original bourne shell.
This means, it's capable of executing all `.sh` scripts, as well as a new format called `.bash`.

Additionally, bash:
- incorporates features from the [[KSH|Korn Shell]]
- incorporates features from the [[CSH|C Shell]]
- adds command history
- adds command line editing

---

### Syntax

- `{bash}./programInThisFolder`
	- execute a program located in the current folder
	- `{bash}"./program in this folder"`
		- if it has spaces it needs the quotation marks
- `{bash}command & othercommand`
	- execute concurrently
- `{bash}command && othercommand`
	- execute `command` and after you're done `othercommand`
	- both must finish
- `command | othercommand`
	- give `othercommand` the output of `command` as an input

---

![[Unix#^commands]]

---

### Scripts

- **Extensions:**
	- **Info:**
		- they're just a convention on [[Unix]]-like systems. Extension ≠ functionality
		- still, conventionally, scripts have specific extensions
	- `.sh` <- most common
	- `.bash`
	- `.bashrc` for configuration


---

### Plugins

- **Info:**
	- Bash needs external tools to extend its functionality
	- I listed these tools here
	- ~~you need the plugin to install the plugin~~
- **Bash-it**
- **Oh My Bash**