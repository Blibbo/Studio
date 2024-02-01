---
tags:
  - closed-source
  - operating-system
---
---

### About Windows

- bloatware, with a functioning operating system hidden in there

---

### List of OSs this page is valid for

```dataview
LIST from "Software/OS/Windows" AND !"Software/OS/Windows/RELATED"
WHERE file.name != this.file.name
```

---

### Userland

- **Default Start Menu:**
	- `Edit the system environment variables`
	- `Edit environment variables for your acccount`
	- `System Information`
		- it's [[#^msinfo32|this]] .exe
- **Commands:** ^commands
	- `cd path/to/directory` ^cd
		- change directory
	- `dir` ^dir
		- list files and directories in current dir
		- `dir FolderName`
			- lists stuff in that folder without moving (like [[#^cd]] makes you do)
		- `dir myFile.txt`
			- looks for a file named that way in the current directory
		- `dir /s`
			- list files in subdirectories, too
		- `dir /a`
			- list all, hidden items included
		- `dir /b`
			- strips off all info except for file path
			- "bare"
		- `dir /s /b filename.ext` ^search-file
			- looks for any file called `filename.ext` that's a descendant of your current directory
			- if you go to the root of your system, it's basically what [[Everything.exe]] does
	- `find`
		- filters output
		- `dir | find ".txt"`
			- only show .txt files in the current folder
	- `pause`
		- pauses the prompt until a key is pressed
		- you could replicate this program in [[c]] by calling [[C#^getchar|getchar]] and ignoring the return value
		- useful for [[Command Prompt#Batch files|batch files]] or for programs to keep a prompt from closing automatically
	- `echo string`
		- echoes the string in the prompt
		- `echo off` ^echo-off
			- stops echoing commands automatically (also stops displaying the current working directory)
		- `echo on`
			- undoes the thing
	- `where commandorexecutable`
		- if it recognizes the command (either it's in the current dir or [[Windows#^path|available everywhere]]) it'll tell you where it is
		- if it finds multiple, it tells you the location of every single one
	- `tree`
		- view the folder tree of the directory you're in
	- `regedit` ^regedit
		- open system registries editor
	- `msinfo32` ^msinfo32
		- info about the system
	- `devmgmt.msc`
		- device manager
		- you can see USBs that fail to connect there
	

---

### Tools to install

- `dumpbin`
	- basically [[Unix#^objdump|objdump]]

---

### Environment variables

- **Editing environment variables:**
	- start menu
	- look for "environment variables"
	- either open the one for your account or the one for the system
	- click "environment variables" on the window that opens
	- double click on any specific variable to edit it
- **Path** ^path
	- this variable stores a list of directories
	- every executable file (`.exe`, `.batch`, `.cmd`) that's directly inside the directories contained here is available everywhere on your system
	- super useful for executable files that you want to turn into commands available anywhere, like [[Git]] or [[php.exe]]
	- when you install git, it goes in the path automatically. But you get what I mean

---

### Registries

- **Windows Registry Editor** ^registry-editor
	- open it: [[#^regedit]]
	- _show address bar_: View > address bar
- **Remove program from context menu** (when you right click your desktop or whatever)
	- a program in your context menu typically has 2 registry editor entries:
		- the one for when you right click on a file
			- `HKEY_CLASSES_ROOT\Directory\shell\YourProgram`
		- the one for when you click on a folder's background
			- `HKEY_CLASSES_ROOT\Directory\Background\shell\YourProgram`
	- remove both entries for that program, and it'll stop appearing in your context menu
	
---

### Shortcuts

- `Win + R`
	- execute a [[#^commands|command]] (or .exe in the [[#^path]])
- `Win + X`
	- it's like a right click on the windows button
	- `Up/Down` keys to navigate it
	- one of the options opens the default shell
		- can customize it to open [[Powershell]] instead of [[Command Prompt]]
- `Alt + Enter`
	- full screen on some applications
- `F11`
	- full screen on applications where `Alt + Enter` doesn't work

---

### Alt + keycodes

- apparently the keycodes are just [[ASCII]]
- I'm not sure. Here's a list of shits that generally work on windows:
- **Alt +:**
	- 126 ~ tilde ^tilde
	- 96 `` ` `` backtick
	- 212 È
	- 144 É
	- 0200 È
	- 0201 É
	- 0192 À
	- 0193 Á
	- 4774 ª superscript a
	- 5885 ² superscript 2
	- 5115 ¹ superscript 1
	- 55214 «
	- 1454 «
	- 55215 »
	- 1455 »
	- 1452 ¼ one quarter / 1 quarter
	- 1451 ½ one half
	- 4521 ®
	- 8888 ©
	- 111111 
	- 222222 
	- 333333 
	- 7777777 
	- 98989 ¡ reversed exclamation mark
	- 173 ¡
	- 0191 ¿ reversed question mark
	- 6824 ¿
	
- **Copy and paste:**
	- you should be able to type these through unicode codes but it doesn't seem to work
	- ≠
	- π