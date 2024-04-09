---
tags: 
aliases:
  - batch scripting language
---
The 

---

## Execution

There's an interpreter that executes every line you write.

Here's how the interpretation works:
1. the interpreter it reads the line OR [[#blocks|block]].
2. it **parses** it. What parsing means is:
	- whenever it sees [[#^variable-syntax|%percent signs%]] it thinks what's inside is the name of a [[#variables|variable]].
	- it tries to replace this thing with the value of the variable
	- if there's no variable with that name, it fails
	- ==N.B.== the whole block gets parsed here. AT THE SAME TIME. Not line per line.
	  This means, if you set a variable within a block, you can't read your newly set value until the next line/block. It's TREMENDOUS.
3. it executes the commands line per line. [[#^block]]s are now treated as made out of multiple lines

https://stackoverflow.com/a/64324969

### Scripts

They're text files with a `.bat` or `.cmd` extension.
On windows, they're [[executable|executables]].

Upon execution (when opening these files) each line in the file is executed sequentially.
It goes from the first line to the last line.
This creates a problem in [[#function declaration|function declarations]].

Before executing each line of a batch script, the interpreter executes the following line of code:
`{batch}@echo %cd%^>%0 %*`
To stop doing this, use [[#^echo-off]].

#### Existing labels

Scripts have these pre-defined labels. See [[#Labels]] for more.

- `{batch}:eof` end of file

---

## Environment

In each terminal session, there's some "environment" information.

As far as I know, this information is:
- what directory you're in
- the variables in your environment

### Existing Variables

The [[#^set]] command allows you to create variables. See [[#variables]] for more.
Tons of existing variables exist though, and they're listed here.

#### Variables of the scripting language

These get created with each terminal session and don't really make sense outside of scripting or writing commands

- `%CD%` ^current-directory
	- current directory
- `%0` is the name of the command (or script).
	- ==only exists in [[#Scripts]]==
- `{batch}%1 %2 %3 etc` contain the parameters passed to the script/function within the script
	- ==only exists in [[#Scripts]]==
- `{batch}%*` contains all the parameters (`{batch}%1 %2 %3 etc`) as a single string (but not `{batch}%0`)
	- ==only exists in [[#Scripts]]==
- `{batch}%ERRORLEVEL%` contains the last error code
	- functions typically return this variable
- `{batch}%~1` is a modifier that removes any quotation marks from the variable `{batch}%1`
- `{batch}%~dp0` contains the path of the currently executing script

#### Windows Environment Variables

These get used by the operating system to do all sorts of things. You can read them in [[#scripts]]

![[Windows#Environment variables]]

---

## Syntax

- `{batch}^` ^escape-characters
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
- `{batch}command`
	- runs the executable
	- it has a `.exe` extension but you can ~~and should~~ omit it
- `{batch}command.exe`
	- Runs this exe file
- `{batch}"my command"`
	- Runs `{batch}my command.exe`
	  It has spaces in the name, hence the quotation mark to signify that it's all one token.
- `{batch}C:\Path\To\command`
	- Execute `{batch}command.exe` if it's not in [[Windows#^path]] by specifying the full path
- `{batch}"C:\Path with spaces\or\command with spaces"`
	- Execute `{batch}command with spaces.exe` if anything in the name has spaces
- `{batch}command /?`
	- Tells you verbose information about the external
- `{batch}command & aftercommand`
	- Execute `{batch}command` and then `{batch}aftercommand` sequentially.
	  If `{batch}command` fails, **it still executes** `{batch}aftercommand`.
- `{batch}command && aftercommand`
	- Execute `{batch}command` and then `{batch}aftercommand` sequentially.
	  If `{batch}command` fails, **it does not execute** `{batch}aftercommand`.
- `{batch}command (code block)`
	- the code block can span multiple lines
	- a space is required between the command and the parentheses
- `{batch}%CD%`
	- current directory
- `{batch}@command` ^silence
	- Don't echo this command to the console
- `{batch}nul`
	- An empty object

### Piping

The **pipe** operator `{batch}|` turns the [[standard output]] of the command to the **left**,
into the [[standard input]] of the command to the **right**.

To make programs communicate in fancier ways look into [[IPC]].

- `{batch}command | othercommand` ^pipe

### Redirection

Redirection operators `{batch}<` and `{batch}>` are used to handle input and output [[stream|streams]].

- `{batch}command < file`
	- Redirects input.
	  It takes the **file's contents** and provides it as input for a **command**.
	  Essentially the same as `{batch}type file | command`
- `{batch}command > file`
	- Redirects **output**.
	  It takes output from a **command** and writes it to a **file**.
- `{batch}command < nul`
	- When you want to provide an empty [[standard input|input]] to a command
- `{batch}command > nul`
	- When you want to silence the output of a command completely, redirecting its [[standard output]] nowhere
- `{batch}command 2 > nul`
	- Silence the command's [[standard error]]
- `{batch}command > nul 2>nul`
	- **_STFU_**
- `{batch}type file1 > file2`
	- Copies `{batch}file1` into `{batch}file2` using [[#^type]]

### Blocks

Blocks are groups of lines that count as "one single line" in some cases and as "several different lines" in other cases
Their syntax is composed of parentheses `{batch}()`.

Blocks can technically be written inline and in more lines, however:
`{batch}( my_command )` ${ \leftarrow }$ pointless. Blocks are for **more than one** instruction, that's the whole point.

This is what they actually look like usually:
```batch
(
	command1
	command2
)
```

#### How blocks get treated

Blocks get treated as:
- **a single instruction** when you pass them as an argument to commands like [[#^if]].
- **a single instruction** when [[#Parsing]] variables.
- **multiple instructions** when executing commands inside.


### Variables

They're [[variable|variables]]. Like in any other language.

#### Declaration

- `{batch}set my_Variable = 3` see [[#^set]] for more.

#### Parsing

Variables expand to (a.k.a. _"their text gets replaced with"_) their corresponding value before the line _**==OR BLOCK==**_ is executed. See [[#Execution]] for more info.
Anyways, this creates problems. These pieces of syntax below address it.

- `%variable%` ^variable-syntax
	- Syntax for normal variables. This expands to the value of the environment variable.
	  It has scoping problems with [[#Blocks]].
	  
	- `{batch}%variable:c=d%`
		- expands to the variable, but replaces `c` with `d`
		- you can also replace with nothing, to make substrings
- `{batch}!variable!` ^block-variable
	- Refer to the variable, using the correct scope for [[#blocks]]. Fixes the problem.
	- This syntax requires `{batch}SETLOCAL ENABLEDELAYEDEXPANSION` to be written anywhere before this line (even outside the block)
	- https://stackoverflow.com/a/21389931

### Labels

==They only exist in [[#Scripts]]==
Labels are places in the code that you can jump to.
You create them through this syntax:
`:my_label`

You jump to them through
`goto :my_label`
see [[#^goto]] for more.

### Functions

==They only exist in [[#Scripts]]==
[[Subprogram|Subroutines]] for this language.

#### Function declaration

Due to how [[#Scripts]] work (everything gets executed), the function declaration must somehow be skipped explicitly.
The way to do it is with the [[#^goto]] instruction and [[#Labels]].

```batch
:my_function
	REM your code here. %1 -> 3
exit /b
REM "goto :eof" is equivalent and works too
```

#### Function call

- `{batch}call :my_function 3`

#### Example script with functions

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

**Output:**
```
Parameter: 3
Parameter: 4
```

---

## Commands

**Internal commands** are unique to this shell, **external commands** are actual programs on windows that behave like commands in any shell language interpreter.

- **[Unofficial Reference I use](https://ss64.com/nt/)**: in this site, internal commands have a little dot (${ \cdot }$) next to them
- [Official Reference by Microsoft](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands)  I can't tell internal or external commands apart, so I don't like it

### Internal sommands

These are the built in commands, only usable in this shell.

- `{batch}REM any string here`
	- Remark. A comment. Does nothing
	- Often used in scripts
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
- `{batch}type <filename>` ^type
	- Writes out the contents of a text file on the console.
- `{batch}if`
	- it's an if statement
	- `{batch}if not exist "%var%" (echo a)`
	- `{batch}) else`
		- After an `{batch}if`
		- it's NOT a command of its own: the closing bracket `)` MUST be in the same line as `{batch}else`. That's how it even recognizes else as valid
		  There must be a space between `{batch}else` and `{batch}(`, if you put a block
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
	- https://stackoverflow.com/a/33770152/22217504
	  you desperately need this. its behavior is very specific
	- copies the content of `source` into `dest`.
	- `{batch}source` can be either a file or a directory
	- `{batch}dest` is a file if it has a backslash at the end, like `{batch}path\to\dest\` or a directory if it doesn't
		- in case of ambiguity (no backslash but file extension, like a file) it prompts you for more info. I can't suppress this. Just make it not ambiguous
	- doesn't delete already existing files in dest
	- doesn't copy subfolders
	- prompts you on whether to overwrite files with the same name
		- options are y/n/a (yes, no, all)
	- `/Y` forces overwriting, suppressing the confirmation prompt
	- `/s` copies subfolders (recursively. Everything.)
	- you can only copy into a file if you're copying a file. ~~(duh. Don't copy directories into files dumbass)~~
- `{batch}set` ^set
	- prints to the console every environment variable and their values
	- `{batch}set my_var=my string`
		- Set a variable value. See [[#Variables]].
		  You can't put spaces around the equal sign `{batch}=`.
		  All values you write are strings by default.
		  You can't use [[#^escape-characters]] for some reason.
		- `{batch}set "my-var=my string^>"`
			- This syntax allows you to make any variable value that normally doesn't work, work.
			  Notice how the double quotes are _before the name_ and _after the value_.
		- `/a` evaluate the expression after `=` as arithmetic: **not** a string.
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
- `{batch}goto :label` ^goto
	- ==only exists in [[#Scripts]]==
	- jumps to the [[#Labels|label]] and starts executing from there
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

## Shortcuts

Shortcuts for the terminal.
- `Up Arrow` ^up-arrow
	- Previous command
- `Down Arrow`
	- Next command
	- Doesn't do anything if you didn't use [[#^up-arrow]] before
- `Ctrl + Down Arrow`
	- Go down one line in the screen. As in, scrolling.

---

## Trivia

- `.bat` was [[MS-DOS]]'s original batch file. `.cmd` is modern. `.bat` is backwards compatible with MS-DOS, so if you need your file to be, use that (~~you absolutely won't fucking need to, I promise~~)
- they're basically identical though on Windows versions beyond 2000
- `.cmd` was introduced with [[Windows NT]]