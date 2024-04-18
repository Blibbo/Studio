---
tags:
  - software
---
---

### About Termux

- app for [[Android]]
- [[Linux|Linux-like]] environment
- uses [[Bash]] as its scripting language
- userland is mostly [[Unix#Userland|Unix commands]]
- has [[#Commands|extra commands]]

---

### Add-on [[Android#.apk|apk]] 

- **Termux Widgets:**
	- **Info:**
		- put [[Bash#Scripts|.sh]] scripts in the scripts folder or a subdirectory you make in it
		- in your phone's widgets, you will see a termux widget thing you can add to your homescreen
	- **Scripts folder:**
		- `/data/data/com.termux/files/home/.shortcuts/`
		- from the document root of your phone

---

### Commands

- `pkg install packagename` ^package-manager
	- package manager
	- `pkg install clang`
		- [[gcc.exe]]
		- [[g++.exe]]
- `pkg uninstall packagename`
- `dir`
	- emulation of `dir` from [[batch]]
	- options must have a hyphen. It's still a Linux environment
	- **Example:**
		- `{bash}dir -a` to list hidden items too