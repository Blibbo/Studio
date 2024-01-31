---
tags:
  - scripting
  - language
  - interpreter
---
---

### About Bash

- stands for "**Bourne Again Shell**"
- builds on the [[SH|Bourne Shell]], but user friendl*ier*
- shell for a bunch of [[Unix]] like systems, most notably [[Linux]] and [[macOS]] (ew)
- backwards compatible: most SH scripts can be run by Bash
- on Unix-like systems that support it bash is the default shell and it runs when you execute `{bash}sh`
	- ~~execute `{bash}sh` on what? another shell? lol~~
	
---

### Bash builds over [[SH]]

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