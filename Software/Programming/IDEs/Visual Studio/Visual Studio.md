---
tags:
  - proprietary
  - closed-source
  - free
---
---

### About Visual Studio

- powerful [[IDE]] for the [[Windows]] environment

---

### Solutions

- they have a `.sln` extension
- they contain multiple [[#Projects]]

---

### Projects

- a project file extension varies based on what kind of project it is
- **Properties:**
	- **Compiler flags**
		- flags on the compiler
		- you can check for stuff like AVX2 support

---

### Workloads

- **Info:**
	- they're packages you can install
- **Desktop apps development with C++:** ^c-workload
	- [[Visual C++]]
	- C and C++ compilers

---

### Configuration

- **Change Language:**
	- in the installer check that the VS installation you're using has the language pack you want ("modify" on the installation)
	- back in VS, `Tools` > `Options` > `Environment` > `International Settings` > `Language`
- **[[Visual Studio Code]] shortcuts:**
	- `Tools` > `Options` > `Environment` > `Keyboard` > `Apply the following additional keyboard mapping scheme` > `Visual Studio Code`
	- **SHORTCUTS:**
		- `Ctrl + P`
			- seek file
		- `Ctrl + Shift + L`
			- select all occurrences
		- `Ctrl + D`
			- next occurrence
		- `Ctrl + Alt + Down/Up`
			- another cursor in line above/below
		- `Shift + Alt + A`
			- comment
			- behavior changes based on selection
			- no text selected: `comment current line`
			- text within a line selected: `comment selected text`
			- text across different lines selected: `comment multiple lines`

---

### [[C]] and [[C++]]

- **Info:**
	- [[#Projects]] have a `.vcxproj` extension (both C and C++)
- **Required workload**
	- [[#^c-workload|Desktop apps development with C++]]
	
- **NEW PROJECT**
	- Open VS
	- New Project
	- C++ language
	- Empty project
	
	- **ADD SOURCE FILES TO THE PROJECT:**
		- Right click on "Source Files"
		- Add
		- New Item
		- Give this new item a .c extension (if using C)
	
	- **COMPILE**
		- right click the source file to execute
		- click "compile"
	
	- **EXECUTE**
		- select "release" on the thingy next to x64
		- "Local Windows Debugger" appears, click it
		- OR click the other play button next to it.
			It seems to work the same.
		
	- **DEBUG**
		- press F10. Click on the green arrows that appear
			at the beginning of lines
			
- **LINE NUMBERS**
	- `Tools` > `Options` > (on the left) `Text Editor` > `C/C++` > (on the right) `line numbers`
	
- **ANNOYING AUTO FORMAT**
	- `Tools` > `Options` > `Text Editor` > `C/C++` > `Code Style` > `Formatting` > `General`:
	- click the first 3. Which means:
		- tick `indent when i type a tab`
		- untick `auto format when i type ;`
		- untick `auto format when i type }`
		
- **SET COMPILER VERSION**
	- on the solution explorer:
	- right click the project
	- click on "properties" (bottom)
	- configuration properties (on the left)
	- C/C++
	- Language
	- C++ Language Standard (default should be 14)
	- change it to latest (20)
	- there's also a C Language Standard you can change

---

### [[NET Core|.NET]]

- **Info:**
	- `.csproj` for [[C Sharp|C#]] projects
	- `.vbproj` for [[VB.NET]] projects