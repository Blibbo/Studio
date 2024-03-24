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
  - Command Prompt
---
It's made out of two things: a scripting language [[interpreter]] and a [[terminal]].
You can write either commands or file names (to open those files) from this terminal.

---

## Execution of commands

There's an interpreter that executes every line you write.

Here's how the interpretation works:
1. the interpreter it reads the line OR [[#blocks|block]].
2. it **parses** it. What parsing means is:
	- whenever it sees [[#^variable-syntax|%percent signs%]] it thinks what's inside is the name of a [[#variables|variable]].
	- it tries to replace this thing with the value of the variable
	- if there's no variable with that name, it fails
	- ==N.B.== the whole block gets parsed here. AT THE SAME TIME. Not line per line.
	  This means, if you set a variable within a block, you can't read your newly set value until the next line/block. It's TREMENDOUS.
1. it executes the commands line per line. [[#^block]]s are now treated as made out of multiple lines

https://stackoverflow.com/a/64324969

---

## Environment

In each terminal session, there's some "environment" information.

As far as I know, this information is:
- what directory you're in
- the variables in your environment

### Variables


I'll list existing variables here.[[#^set]] command

#### Variables of the scripting language

These get created with each terminal session and don't really make sense outside of scripting or writing commands

- `%CD%`
	- current directory
- `%0` is the name of the command (or script)
- `{batch}%1 %2 %3 etc` contain the parameters passed to the script/function within the script
- `{batch}%*` contains all the parameters as a single string
- `{batch}%ERRORLEVEL%` contains the last error code
	- functions typically return this variable
- `{batch}%~1` is a modifier that removes any quotation marks from the variable `{batch}%1`
- `{batch}%~dp0` contains the path of the currently executing script

#### Windows Environment Variables

These get used by the operating system to do all sorts of things. You can read them in [[#scripts]]

![[Windows#Environment variables]]

## Syntax

- `^`
	- Escape the next character. Allows you to treat pieces of batch syntax as strings.
	  It itself is a piece of syntax. It works on itself.
	- ==Examples:==
		- `^^` outputs `^`
		- `^>` ${ \to }$ `>`
		- `^<` ${ \to }$ `<`
		- `^&` ${ \to }$ `&`
		- `^&^&` ${ \to }$ `&&`
	- ==N.B.== If it's the last token in a command, it escapes the newline and it's as if everything is in the same line
		- If there is nothing in the next line, you'll be prompted for more.
- `executablename`
	- runs the executable
	- it has a `.exe` extension but you can ~~and should~~ omit it
	- `"executable name"`
		- if it has spaces, it needs the quotation marks
- `{batch}command /?`
	- tells you information about the command. VERY verbose.
- `command && aftercommand`
	- execute `command` and `aftercommand` right after
- `command | othercommand` ^pipe
	- the output of `command` becomes the input of `othercommand`
	- by _input_ and _output_ I'm talking about when the programs write in the console window.
	- That normally happens through streams called [[C#^stdin|stdin]] and [[C#^stdout|stdout]] (they'll have other names in other languages but it's still them)
	- to make programs communicate in fancier ways look into [[IPC]] 
- `command (code block)`
	- the code block can span multiple lines
	- a space is required between the command and the parentheses
- **Variables** ^variables-syntax
	- **Declaration**
		- `{batch}set my_Variable = 3`
		- [[#^set]]
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

## Scripts

They're text files with a `.bat` or `.cmd` extension.
On windows, they're [[Executable|executables]].

write blocks

---

## Commands

**Internal commands** are unique to this shell, **external commands** are actual programs on windows that behave like commands in any shell language interpreter.

- **[Unofficial Reference I use](https://ss64.com/nt/)**: in this site, internal commands have a little dot (${ \cdot }$) next to them
- [Official Reference by Microsoft](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands)  I can't tell internal or external commands apart, so I don't like it

### Internal Commands

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
	- `{batch}echo <answer> | command`
		- it's common to use echo in combination with [[#^pipe]]
		- this acts like you're answering the command's prompts.
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
- `{batch}xcopy <source> <dest>`
	- copies the content of `source` into `dest`.
	- `{batch}source` can be either a file or a directory
	- `{batch}dest` is a file if it has a backslash at the end, like `{batch}path\to\dest\` or a directory if it doesn't
		- in case of ambiguity (no backslash but file extension, like a file) it prompts you for more info. I can't suppress this. Just make it not ambiguous
		- SCENARIOS: https://stackoverflow.com/a/33770152/22217504
	- doesn't delete already existing files in dest
	- doesn't copy subfolders
	- prompts you on whether to overwrite files with the same name
		- options are y/n/a (yes, no, all)
	- `/Y` forces overwriting, suppressing the confirmation prompt
	- `/s` copies subfolders (recursively. Everything.)
	- you can only copy into a file if you're copying a file. ~~(duh. Don't copy directories into files dumbass)~~
- `{batch}set` ^set
	- prints to the console every environment variable and their values
	- `{batch}set VAR=initial_value`
		- set a variable value. read it with [[#^variable-syntax|%VAR%]]
		- `/a` evaluate the expression after `=` as arithmetic
	- `{batch}set /p name=Enter your name:`
		- prompt the user for a name. The `Enter your name:` string does NOT go in the variable too. Just the actual name, once the user enters it.
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

## Debugging

To debug variables:
`{batch}if "%variable%"=="" echo empty`

Common errors:
- `<token> was unexpected at this time.`
	- there's a syntax error, but it will keep you guessing.

---

## Trivia

- `.bat` was [[MS-DOS]]'s original batch file. `.cmd` is modern. `.bat` is backwards compatible with MS-DOS, so if you need your file to be, use that (~~you absolutely won't fucking need to, I promise~~)
- they're basically identical though on Windows versions beyond 2000
- `.cmd` was introduced with [[Windows NT]]