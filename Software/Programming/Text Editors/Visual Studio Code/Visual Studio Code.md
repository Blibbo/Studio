---
tags:
  - open-source
---
---

### About VSCode

- made in [[Electron]]
- more of a text editor than an [[IDE]]
- UI is deeply integrated with [[Git]]
- i'd consider it an ide tbh
- ~~(you don't take notes with version control tools)~~
- _aged like milk_

---

### Shortcuts

- `Ctrl + P` ^search-file
	- search file, [[fuzzy search]]
- `Shift + Alt + A` ^comment-text
	- comment selected text
- `Ctrl + Shift + P` ^execute-command
	- execute command
- `Ctrl + D`
	- select next iteration of selected text
	- duplicates cursor
	- can do it as many times as you want
- `Ctrl + Shift + L`
	- select every iteration of the selected text within the file
- `Ctrl + F`
	- look for a string within the current file
- `Ctrl + Shift + F`
	- look for a string in all files
- `Ctrl + ò`
	- open terminal
- `Ctrl + B` ^toggle-sidebar
	- toggle sidebar
- `Ctrl + Space`
	- autocomplete
- `Ctrl + Alt + Up/Down`
	- add cursor up/down a line, in the same column
- `Ctrl + Shift + E`
	- open file explorer

---

### Default Commands

- **Info:**
	- ![[#^execute-command|this]]
	- extensions add other commands
	- these are the default ones
- `Reload Window`
	- reloads the VSCode window
- `Format Document`
	- (PRETTIER) click on configure and choose prettier. It indents code

---

### Extensions

- **[[Git]]:**
	- Git Graph
		- adds a "Git graph" button to the ui
		- allows you to visualize the history
- **[[Laravel]]:**
	- **Laravel Blade Snippets:**
		- colora la sintassi di blade di laravel

- **[[Tailwind]]:**
	- **Tailwind CSS IntelliSense:**
		- descrive il funzionamento di ogni classe che usi se ti ci fermi sopra col mouse

- **[[Vue]]:**
	- https://learnvue.co/tutorials/best-vscode-extensions
	- **Vue Language Features (Volar)**
		- very solid
	
- **[[PHP]]:**
	- **PHP Intelephense:**
		- fortissimo, ti dice se mancano parametri per una funzione e rende semi trasparenti le variabili non usate
		
	- **PHP Namespace Resolver:**
		- fortissimo pure lui, scrivi il nome di una classe e lui mostra opzioni su quale namespace da dove prenderla
		- Usa Ctrl + Shift + P per i comandi,
		- i comandi di questa estensione sono:
			- `Sort Imports`: ordina le classi che importi con "use namespace\etc"
			- `Highlight Not Used Classes`: evidenzia le classi importate non in uso
	
	- **PHP Debug -** `Ctrl + Shift + P +`**:**
		- `Debug PHP`: prima di usare questo comando ti serve piazzare un breakpoint nel codice.
			- Una volta piazzato un breakpoint e usato il comando, freccia verde in alto a sinistra e cercherà di colpire il tuo breakpoint, fermandosi là e lasciandoti continuare
			- l'esecuzione un'istruzione per volta col tasto che boh cercatelo tu cristo madonna
			- poi ti fa vedere tutti i breakpoints anche in file diversi sulla finestra chiamata breakpoints (duh).
	
	- **PHP Constructor**
		- Puoi farne a meno.
		- Ctrl + Shift + P +:
			- Construct (Insert Constructor Property): di default fa un attributo protected che viene inizializzato dal costruttore della classe
			- Inoltre mette in evidenza ogni iterazione del nome dell'attributo così che puoi cambiarlo subito.
			- Dalle impostazioni dell'estensione (vedi sotto) puoi cambiare phpConstructor.choosePropertyVisibility (te la fa scegliere dopo il nome dell'attributo) e phpConstructor.visibility (public o protected)
- **[[ROBLOX]]:**
	- Rojo - Roblox Studio Sync

---

### Snippets

- [DOCS](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
- **Make them work:**
	- Settings
	- Editor
	- Quick Suggestions
	- All 3 bullshits -> on
	- _ALTERNATIVELY_: Tab Completion -> on
- **Make snippet:**
	- File
	- Preferences
	- Configure user snippets
	- choose the language
- **Syntax:**
	- it mostly follows [[TextMate#^snippets|textmate]]

	- **Auto Capitalize:**
		- [Stack Overflow thread](https://stackoverflow.com/questions/65846228/capitalize-first-letter-of-vscode-snippet)

- **[[JSON]] upon creation:**
	```json
	{
	    // Place your snippets for <languagename> here. Each snippet is defined under a snippet name and has a prefix, body and
	    // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	    // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
	    // same ids are connected.
	    // Example:
	    // "Print to console": {
	    //  "prefix": "log",
	    //  "body": [
	    //      "console.log('$1');",
	    //      "$2"
	    //  ],
	    //  "description": "Log output to console"
	    // }
	}
	```
	