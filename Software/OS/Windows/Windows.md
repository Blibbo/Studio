---
tags:
  - closed-source
  - operating-system
---
Bloatware, with a functioning operating system hidden in there.
Made in [[C++]]

---

## Releases

```dataview
TABLE from "Software/OS/Windows" AND !"Software/OS/Windows/RELATED" AND !"Software/OS/Windows/TOOLS"
WHERE file.name != this.file.name
```

---

## Executables

Executable files on Windows are `.exe`, `.bat` or `.cmd` files.

---

## Userland

### Default Start Menu

- `Command Prompt`
	- opens the command prompt
- `Edit the system environment variables`
- `Edit environment variables for your acccount`
- `System Information`
	- It's [[#^msinfo32]].exe
- `Services`
	- It's [[#^services-msc]]
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

They're [[executable|executables]] that behave as if they were in the [[#^path]].
Executables that also actually are in the [[#^path]] also count, but I'm documenting the default native ones to Windows.

#### Where to run commands?

There are various places you can run commands from.
- [[#^win-r]]
- any terminal (windows has [[batch]] and [[Powershell]] installed already)
- the long bar on top of the [[explorer.exe|file explorer]] where the current path is written (yes. LOL.) 

#### Commands meant to run inside terminals

These commands don't really make sense if you run them outside of a terminal because they print stuff to the standard output.
- This means that if you were to open them or run them with [[#^start]] they'd print stuff and immediately disappear.
  Not necessarily, because some prompt you for inputs, but still. They aren't meant to be run as standalone executables.


- `{batch}help`
	- Lists [[batch|batch]] internal commands
	- `{batch}help <internal command>`
		- Tells you about the command
- `where <command>`
	- if it recognizes the command (either it's in the current dir or [[Windows#^path|available everywhere]]) it'll tell you where it is
	- if it finds multiple, it tells you the location of every single one
- `{batch}ping`
	- Pings the destination
	- `{batch}ping 192.0.2.0 -n 1 -w 500> nul` ^ping-sleep
		- [[#^timeout]] for a fraction of a second. `{batch}500`ms (milliseconds) in this case.
		- `{batch}500` is actually the minimum it will wait, even if you type in lower.
		- [Found it here](https://stackoverflow.com/a/30665317)
- `timeout /t 5 /nobreak >nul` ^timeout
	- Wait `{batch}5` seconds.
	- https://stackoverflow.com/a/30666055
- `tree`
	- view the folder tree of the directory you're in
- `{batch}net` ^net
	- `{batch}net start <servicename>` ^net-start
		- Start a service.
		  If you installed a program and you want to know what their service name is, check [[#^services-msc]]
		- Needs administrator mode.
	- `{batch}net stop <servicename>` ^net-stop
- `{batch}sc query <servicename>`
	- Find out if the service is running correctly.
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

##### Common options

These options are built into every Windows command meant for the command line.
Consider that these options are built into every single `{batch}.exe`, they're not some arcane element of [[batch|batch]] syntax.
They just happen to do the same thing.

`{batch}<command>` +
- `{batch}/?`
	- Tells you about the command.

##### Non-native (to install)

- `dumpbin`
	- basically [[Unix#^objdump|objdump]]

#### Commands that open their own window

- `cmd`
	- opens the [[batch]] terminal
	- when ran inside a terminal, it doesn't open another terminal
	- it does hijack the terminal though. (Starts interpreting batch commands)
- `powershell`
	- opens the [[powershell]] terminal
	- when ran inside a terminal, it doesn't open another terminal
	- it does hijack the terminal though. (Starts interpreting powershell commands)
- `wt`
	- **Windows Terminal** opens the default terminal for the operating system. It's typically powershell. A shorthand.
	- `{batch}wt batch1; batch2; batch3;`
- `{batch}start <file path/directory>` ^start
	- Equates to a double click on something. Opens the thing in the default app.
	- `{batch}start "Window Title" "<path to program>" "<path to open>"`
		- this equates to "open with" in the context menu.
		- window title is a weird parameter to have, but you have it.
		- ==Ex:== `{batch}start "" "C:\Windows\System32\notepad.exe" "C:\path\to\example.txt"`
	- ==N.B.== if the file path contains spaces, you are FORCED to specify the app you're opening it with
		- this is because normally you'd use `""`, but in here, `""` triggers the second version of the command, where you have to specify the path.
		- **ex:** `{batch}start "explorer" "path with spaces"`
	- `{batch}/b`
		- Don't create a new window.
- `{batch}explorer` ^explorer
	- opens the file explorer on the home directory
	- `{batch}explorer <directory>`
		- opens the explorer at the specified directory
		- if the specified path isn't a directory but a file, i'm not sure what it does.
			- i've seen it open the user documents directory no matter what i put, as long as it's an incorrect path
	- MULTIPLE TABS: there's no command to handle them yet
		- https://answers.microsoft.com/en-us/windows/forum/all/windows-11-22h2-explorerexe-command-line-switch-to/b0958474-6124-44c9-b01a-7e6952317848
- `regedit` ^regedit
	- open system registries editor
- `msinfo32` ^msinfo32
	- info about the system
	- `System Model`
		- what laptop you're using
- `services.msc` ^services-msc
	- Find out what [[service|services]] are installed.
	  It's a [[MMC]] snap-in with a [[GUI]] to view, start, stop, pause, resume, or configure services on your system.
	- `right click a service` > `Properties` > `General` > `Path to executable` ^port
		- Contains **not only** the path to the executable the service is generated from, but also the **configuration options** it was launched with.
		- This helps you find **config files** to figure out the port it's being served in.
- `devmgmt.msc`
	- device manager
	- you can see USBs that fail to connect there

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
		- can customize it to open [[Powershell]] instead of [[batch]]
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
	- 96 \` backtick
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
	- 111111 •
	- 222222 ♫
	- 333333 §
	- 7777777 ±
	- 98989 ¡ reversed exclamation mark
	- 173 ¡
	- 0191 ¿ reversed question mark
	- 6824 ¿
	
- **Copy and paste:**
	- you should be able to type these through unicode codes but it doesn't seem to work
	- ≠
	- π

---

### Customization

#### Icons

You can change them in a file's properties.
It's not an available option for any executable file. I guess the idea is to make it evident what it is because they're the most dangerous files.
It's not like it's physically impossible, windows is just trying to prevent you from doing it.
There are programs that allow you to alter executables to get a custom item.
All info in the links below

https://www.makeuseof.com/tag/customize-icon-windows/
https://www.makeuseof.com/windows-10-icon-packs/

---

## Related Software

```dataview
TABLE FROM "Software/OS/Windows/RELATED"
```