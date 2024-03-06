---
tags:
  - scripting
  - language
  - interpreter
aliases:
  - cmd
  - batch
  - cmd.exe
  - Command Prompt Interpreter
---
It's made out of two things: a scripting language interpreter and a terminal.
You can write either commands or file names (to open those files) from this terminal.
Some commands are built into [[Windows]] (and can be run on their own), others are built into this terminal only.

Commands I listed [[#Commands|here]] are the ones exclusive to the command prompt.
A reference for all the available commands in the terminal can be found
- [here](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands) by microsoft. The official one. It sucks balls
- [here](https://ss64.com/nt/) an unofficial one, it has a little dot next to the commands that are exclusive to the command prompt, and the other ones are native to Windows (those can be run by [[Powershell]] too)

---

### Environment

In each terminal session, there's some "environment" information.

At its lowest level, this information is:
- what directory you're in
- the variables in your environment

#### Variables

There are tons of default variables you can play with on Windows.
There are also exclusive variables added when you open this terminal.
You can create new variables yourself through the [[#^set]] command

Here are the variables the terminal adds:
- `%CD%`
	- current directory

Here are the variables Windows adds:
![[Windows#Environment variables]]

### Syntax

- `command (code block)`
	- the code block can span multiple lines
	- a space is required between the command and the parentheses
- `executablename`
	- `"executable name"`
		- if it has spaces, it needs the quotation marks
	- runs the executable
	- it has a `.exe` extension but you can ~~and should~~ omit it
- `command && aftercommand`
	- execute `command` and `aftercommand` right after
- `command | othercommand`
	- the output of `command` becomes the input of `othercommand`
	- by _input_ and _output_ I'm talking about when the programs write in the console window.
	- That normally happens through streams called [[C#^stdin|stdin]] and [[C#^stdout|stdout]] (they'll have other names in other languages but it's still them)
	- to make programs communicate in fancier ways look into [[IPC]]
- `%variable%` ^variable-syntax
	- this expands to the value of the environment variable.
	- `{batch}%variable:c=d%`
		- expands to the variable, but replaces `c` with `d`
		- you can also replace with nothing, to make substrings
- `%CD%`
	- current directory
- `@command` ^silence
	- don't echo this command to the console
- `{batch}<nul`
	- when you want to provide an empty input to a command

---

### Language quirks

In batch files, when a line **OR BLOCK** is reached, it gets parsed before being executed.
Variables expand to the value they had **BEFORE** the line/block was reached.
Meaning, if you set a variable in a block, you can't access your newly set variable by default.
That behavior gets fixed by inserting this line at the start of the script:
`{batch}setlocal EnableDelayedExpansion`
and by using `{batch}!this_syntax!` to refer to variables, instead of [[#^variable-syntax|this one]]
https://stackoverflow.com/a/21389931

---

### Commands

These are called **Internal Commands** because they're unique to this shell
- `REM any string here`
	- remark. A comment. Does nothing
	- used in scripts
- `echo string`
	- prints `string` to stdout
	- `echo`
		- tells you whether echoing of commands is on or off
	- `echo off` ^echo-off
		- stops echoing commands automatically (also stops displaying the current working directory)
		- often used in combination with [[#^silence|@]]
	- `echo on`
		- undoes the thing
- `{batch}if`
	- it's an if statement
	- `{batch}if not exist "%var%" (echo a)`
	- `{batch}) else`
		- after an `{batch}if`
		- it's NOT a command of its own: the closing bracket `)` MUST be in the same line as `{batch}else`. That's how it even recognizes else as valid
- `{batch}for /f "delims=" %%a in ('other.bat') do set output=%%a`
	- copy the last line of the file's content
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
- `rd directory`
	- deletes a directory
	- `/s` delete subdirectories and files inside, too
	- `/q` suppresses confirmation prompts
- `xcopy source/dir dest/dir`
	- copies the directory into the destination directory
- `set VAR=initial_value` ^set
	- set a variable value. read it with [[#^variable-syntax|%VAR%]]
	- `{batch}set /p name=Enter your name:`
		- prompt the user for a name. The `Enter your name:` string does NOT go in the variable too. Just the actual name, once the user enters it.
- `setlocal` ^setlocal
	- local environment for environment variables
- `endlocal`
	- required to end [[#^setlocal]]
- `pause`
	- pauses the prompt until a key is pressed
	- you could replicate this program in [[c]] by calling [[C#^getchar|getchar]] and ignoring the return value
	- useful for scripts or for programs to keep a prompt from closing automatically
- `call otherbatch` ^call
	- call another batch file without passing control to it
	- changes these called batch files make persist (variables, `cd`)
- `exit`
	- exit the current script
	- `exit /b`
		- exit the script without closing the terminal, i think (still seems to close it so idk)
		- supposed to be a substitute to [[#^call]] (doesn't change the environment on the parent script)

---

### Scripts

They're files with a `.bat` or `.cmd` extension.

#### Script unique stuff

`%1`, `%2`, `%3` etc are [[#Variables]] that contain arguments passed when the script was [[#^call|called]]. If no arguments were passed, they default to `""`

`{batch}%~dp0` is a variable containing the path of the currently executing script

#### Examples

```batch
@echo off
echo print something
pause
```

---

### External commands

![[Windows#^commands]]

---

### Debugging

To debug variables:
`{batch}if "%variable%"=="" echo empty`

Errors:
- `<token> was unexpected at this time.`
	- there's a syntax error, but it will keep you guessing.

---

### Trivia

- `.bat` was [[MS-DOS]]'s original batch file. `.cmd` is modern. `.bat` is backwards compatible with MS-DOS, so if you need your file to be, use that (~~you absolutely won't fucking need to, I promise~~)
- they're basically identical though on Windows versions beyond 2000
- `.cmd` was introduced with [[Windows NT]]