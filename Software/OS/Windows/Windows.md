---
tags:
  - closed-source
  - operating-system
---
Bloatware, with a functioning operating system hidden in there.
Made in [[C++]]

---

### Releases

```dataview
LIST from "Software/OS/Windows" AND !"Software/OS/Windows/RELATED"
WHERE file.name != this.file.name
```

---

### Executables

Executable files on Windows are `.exe`, `.bat` or `.cmd` files.

---

## Userland

### Default Start Menu

- `Command Prompt`
	- opens the command prompt
- `Edit the system environment variables`
- `Edit environment variables for your acccount`
- `System Information`
	- it's [[#^msinfo32]].exe
- `Defragment and Optimize Drives`
	- See what kind of drives you have (ssd, hdd).
	  You can optimize them here:
		- defragmentation, for [[HDD|HDDs]]
		- trimming, for [[SSD|SSDs]]
- `Power Options`
	- it's also in the control panel
	- Disable power management for ssds and make them consume all the time (needed to for the garbage collector to index stuff when idle)
		- `Change plan settings` on the plan in use
		- `Change advanced power settings`
		- `PCI Express`
		- `Link State Power Management`
		- `Setting: Off`

---

### Commands

They're executables that behave as if they were in the [[#^path]].
Executable that also actually are in the [[#^path]] also count, but I'm documenting the default native ones to Windows.

#### Where to run commands?

There are various places you can run commands from.
- [[#^win-r]]
- any terminal (windows has the [[Command Prompt]] and [[Powershell]] installed already)
- the long bar on top of the [[explorer.exe|file explorer]] where the current path is written (yes. LOL.) 

#### Commands meant to run inside terminals

- `where commandorexecutable`
	- if it recognizes the command (either it's in the current dir or [[Windows#^path|available everywhere]]) it'll tell you where it is
	- if it finds multiple, it tells you the location of every single one
- `tree`
	- view the folder tree of the directory you're in
- `systeminfo`
	- info about the system
- `wmic get cpu`
	- tells you info about the cpu
	- `wmic get cpu caption`
		- returns the caption of the CPU (the essential details)
- `type file.txt`
	- show file contents
- `more`
	- same as `type`(???)

#### Commands that open their own window

- `cmd`
	- opens the [[command prompt]] terminal
	- when ran inside a terminal, it doesn't open another terminal
	- it does hijack the terminal though. (Starts interpreting batch commands)
- `powershell`
	- opens the [[powershell]] terminal
	- when ran inside a terminal, it doesn't open another terminal
	- it does hijack the terminal though. (Starts interpreting powershell commands)
- `regedit` ^regedit
	- open system registries editor
- `msinfo32` ^msinfo32
	- info about the system
	- `System Model`
		- what laptop you're using
- `devmgmt.msc`
	- device manager
	- you can see USBs that fail to connect there

- **Non-native (to install)**
	- `dumpbin`
		- basically [[Unix#^objdump|objdump]]

---

### Environment variables

- **To edit them (without using commands):**
	- [[#^edit-variables]]
- `%PATH%` ^path
	- This variable stores a list of directories.
	  
	  Every [[#Executables|executable]] that's directly inside these directories is available as a command everywhere on your system.
	  
	  Priority (same name, who launches?) is based on the order they're written in.
	  
	  Super useful for executable files that you want to turn into commands available everywhere. Examples: [[Git]] and [[php.exe]].
	  
	  When you install command line tools and they ask for administrator permission, one of the things they do is simply put themselves here automatically.
	  
	  If a bigger program installs a command line tool as a dependency, it will probably not put the command in the path. So if you roam around and figure out you have a `git.exe` somewhere but the command doesn't work, it's because you have to put the directory `git.exe` is in, in this variable.

---

### Recycle bin

- `C:\$Recycle.bin` is the path of the recycle bin

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

### Hosts file

- located in `C:\Windows\System32\drivers\etc\`
- contains [[DNS]] entries that you don't need to look up with dns requests

---

### Shortcuts

- `Win + R` ^win-r
	- execute a [[#^commands|command]] (or .exe in the [[#^path]])
	- also called `Stard` ${ \to }$ `Run`
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

---

### Related

```dataview
LIST FROM "Software/OS/Windows/RELATED"
```