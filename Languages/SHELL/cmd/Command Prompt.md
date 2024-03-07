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

Scripts are text files with `.bat` or `.cmd` extensions. They don't need to be compiled and are natively executable on Windows.
They contain series of commands. Each line is its own command, executed sequentially.

The scripting language isn't super intuitive, here's a link that helps:
https://stackoverflow.com/a/64324969

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
	- runs the executable
	- it has a `.exe` extension but you can ~~and should~~ omit it
	- `"executable name"`
		- if it has spaces, it needs the quotation marks
- `command && aftercommand`
	- execute `command` and `aftercommand` right after
- `command | othercommand`
	- the output of `command` becomes the input of `othercommand`
	- by _input_ and _output_ I'm talking about when the programs write in the console window.
	- That normally happens through streams called [[C#^stdin|stdin]] and [[C#^stdout|stdout]] (they'll have other names in other languages but it's still them)
	- to make programs communicate in fancier ways look into [[IPC]]
- **Variables**
	- **Declaration**
		- `{batch}set my_Variable = 3`
		- [[#^]]
	- **Parsing**
		- Variables mentioned within the code expand to their value before the line OR BLOCK (if you're inside a block) is executed.
		  This can mean you might not be able to access your newly set variable inside a block. This problem is addressed [[#^block-variable|here]]
		- `%variable%` ^variable-syntax
			- this expands to the value of the environment variable.
			- `{batch}%variable:c=d%`
				- expands to the variable, but replaces `c` with `d`
				- you can also replace with nothing, to make substrings
		- `{batch}!variable!` ^block-variable
			- correct scope for blocks
			- requires `{batch}SETLOCAL ENABLEDELAYEDEXPANSION` to be written anywhere before this line (even outside the block)
			- https://stackoverflow.com/a/21389931
	- **Default**
		- `{batch}%errorlevel%` contains the last error code
			- typically returned by functions
		- `{batch}%1 %2 %3 etc` contain the parameters passed to the script/function within the script
		- `{batch}%~1` is a modifier that removes any quotation marks from the variable `{batch}%1`
		- `{batch}%*` contains all the parameters as a single string
		- `{batch}%~dp0` contains the path of the currently executing script
- `%CD%`
	- current directory
- `@command` ^silence
	- don't echo this command to the console
- `{batch}<nul`
	- when you want to provide an empty input to a command
- **Functions**
	- **Declaration**
		```batch
		:my_function
			REM your code here. %1 -> 3
		exit /b
		REM "goto :eof" is equivalent and works too
		```
		- the function declaration has to be skipped somehow (see [[#^goto]].
		  The default behavior of the script is reading and executing everything: even the definition with non-existent formal parameters.
	- **Call**
		- `{batch}call :my_function 3`
	- **Example**
		```batch
		@echo off
		goto :main
		
		:my_function
			echo Parameter: %1
		exit /b %errorlevel%
		
		:main
			call :my_function 3
			call :my_function 4
		exit /b %errorlevel%
		```
		- **Output:**
			```
			Parameter: 3
			Parameter: 4
			```
- **Labels**
	- they're places in the code you can jump to
	- `:my_label`
	- `goto :my_label`
	- **Default labels**
		- `:eof` end of file

---

### Commands

These are called **Internal Commands** because they're unique to this shell
- `{batch}REM any string here`
	- remark. A comment. Does nothing
	- used in scripts
- `{batch}echo string`
	- prints `string` to stdout
	- `{batch}echo`
		- tells you whether echoing of commands is on or off
	- `{batch}echo off` ^echo-off
		- stops echoing commands automatically (also stops displaying the current working directory)
		- often used in combination with [[#^silence|@]]
	- `{batch}echo on`
		- undoes the thing
- `{batch}if`
	- it's an if statement
	- `{batch}if not exist "%var%" (echo a)`
	- `{batch}) else`
		- after an `{batch}if`
		- it's NOT a command of its own: the closing bracket `)` MUST be in the same line as `{batch}else`. That's how it even recognizes else as valid
- `{batch}for /f "delims=" %%a in ('other.bat') do set output=%%a`
	- copy the last line of the file's content
- `{batch}cd path/to/directory` ^cd
	- change directory
- `{batch}dir` ^dir
	- list files and directories in current dir
	- `{batch}dir FolderName`
		- lists stuff in that folder without moving (like [[#^cd]] makes you do)
	- `{batch}dir myFile.txt`
		- looks for a file named that way in the current directory
	- `{batch}dir /s`
		- list files in subdirectories, too
	- `{batch}dir /a`
		- list all, hidden items included
	- `{batch}dir /b`
		- strips off all info except for file path
		- "bare"
	- `{batch}dir /s /b filename.ext` ^search-file
		- looks for any file called `filename.ext` that's a descendant of your current directory
		- if you go to the root of your system, it's basically what [[Everything.exe]] does
- `{batch}find`
	- filters output
	- `{batch}dir | find ".txt"`
		- only show .txt files in the current folder
- `{batch}rd directory`
	- deletes a directory
	- `/s` delete subdirectories and files inside, too
	- `/q` suppresses confirmation prompts
- `{batch}xcopy dir/source dir/dest`
	- copies the content of `source` into `dest`.
	- doesn't delete already existing files in dest
	- doesn't copy subfolders
	- prompts you on whether to overwrite files with the same name
		- options are y/n/a (yes, no, all)
	- `/Y` suppresses the confirmation prompt and just does what you asked
	- `/s` copies subdirectories recursively
- `{batch}set VAR=initial_value` ^set
	- set a variable value. read it with [[#^variable-syntax|%VAR%]]
	- `{batch}set /p name=Enter your name:`
		- prompt the user for a name. The `Enter your name:` string does NOT go in the variable too. Just the actual name, once the user enters it.
	- `/a` evaluate the expression after `=` as arithmetic
- `{batch}setlocal` ^setlocal
	- local environment for environment variables
- `{batch}endlocal`
	- required to end [[#^setlocal]]
- `{batch}pause`
	- pauses the prompt until a key is pressed
	- you could replicate this program in [[c]] by calling [[C#^getchar|getchar]] and ignoring the return value
	- useful for scripts or for programs to keep a prompt from closing automatically
- `{batch}call otherbatch` ^call
	- call another batch file without passing control to it
	- changes these called batch files make persist (variables, `cd`)
- `{batch}exit`
	- exit the current script
	- `/b`
		- doesn't change the parent script's environment
		- doesn't close the terminal window
		- used at the end of [[#^functions]]

---

### External commands

![[Windows#^commands]]

### Debugging

To debug variables:
`{batch}if "%variable%"=="" echo empty`

Common errors:
- `<token> was unexpected at this time.`
	- there's a syntax error, but it will keep you guessing.

---

### Trivia

- `.bat` was [[MS-DOS]]'s original batch file. `.cmd` is modern. `.bat` is backwards compatible with MS-DOS, so if you need your file to be, use that (~~you absolutely won't fucking need to, I promise~~)
- they're basically identical though on Windows versions beyond 2000
- `.cmd` was introduced with [[Windows NT]]