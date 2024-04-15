---
tags:
  - proprietary
  - closed-source
  - operating-system
---
Historical [[OS|operating system]] developed at [[Bell Labs]].

---

### Open-source

- **Original Unix:**
	- System V Release 4 (**SVR4**): [[AT&T]] released the source code for one of the later versions of Unix but not under an open-source license. It had restrictive licensing terms
- **Unix-based (not Unix. I mean yeah Unix, but not original Unix):**
	- [[Linux|GNU/Linux]]: biggest open-source unix-based os
	- [[BSD]]: the weird one ^bsd

---

### Userland

- [[SH|Bourne Shell]]
- **Info:**
	- TW: im a windowstard so you'll see `.exe` thrown around a lot
	- it's to remind me if i download knockoff linux utilities i'll need to explicitly write `.exe`
- **Commands:** ^commands
	- `{bash}rmdir my_directory`
		- delete EMPTY directory
	- `{bash}rm -r my_directory`
		- delete directory AND its contents
		- `{bash}rm -ri my_directory`
			- prompts for confirmation before deleting
	- `{bash}sudo othercommand`
		- "superuser do"
		- execute as administrator, basically
	- `{bash}ls`
		- list files and directories in the current directory
		- `{bash}ls -a`
			- list all
			- including hidden items
	- `{bash}mv file directory`
		- **Info:**
			- moves an item (first argument) into another location (second argument)
			- if the second location doesn't exist, it essentially renames the file
			- if it DOES exist and it's 2 files, the second file gets overwritten
		- **Examples:**
		- `{bash}mv path/file.txt new/path`
			- move files
		- `{bash}mv same/directory/oldname.txt same/directory/newname.txt`
			- rename the file
	- `{bash}grep`
		- filters output
		- `{bash}ls -l | grep ".txt"`
			- filter output to only show txt files
		- `{bash}command | grep yourword`
			- filters based on whether `architecture` is present in the line
	- `{bash}objdump -a myprogram.exe` ^objdump
		- tells you whether it's a [[x86-64]] or a [[x86-32]] program
		- `{bash}objdump -x program.exe`
			- lots of info about the program
	- `{bash}file yourfile`
		- tells you stuff about the file
		- `{bash}file yourprogram.exe`
			- tells you the architecture and other stuff
	- `{bash}sleep .5`
		- sleep for half a second
		- useful for [[Bash#Scripts]]
		- `{bash}sleep 1`
			- sleep for 1 second
	- `{bash}cat -v file.txt`
		- show non printing characters (???)
		- it only shows the file's content from my experience
	- `{bash}clear`
		- Clear screen

---

### Trivia

- developed at [[Bell Labs]] in the 70's
- they were using [[B]] to develop it, then they invented [[C]] and switched to it
- distributed by [[AT&T]] as proprietary software
- to this day the original Unix's source code has not been officially released as open-source