---
tags:
  - closed-source
  - free
---
---

### About Obsidian

- [[Markdown]] editor to take notes
- you own the files
- Made in [[Electron]]
- Plugins are written in [[JavaScript]]
- Obsidian uses [[CodeMirror]] as the underlying text editor
- [[Markdown#^syntax-highlighting|Syntax highlighting]] in [[Markdown#^fenced-syntax|codeblocks]] happens through [[Prism.js]] in reading mode
	- **[Available languages](https://prismjs.com/#supported-languages)**
	- editing mode uses CodeMirror so that list has nothing to do with it.
	- Yes, this SUCKS BALLS and creates inconsistencies

---

### Rendering of Markdown in the client

- basic [[Markdown#Syntax|markdown syntax]]
- most [[HTML]] syntax
- [[YAML]] format for [[#^properties|properties]]
- [Wikilinks](https://en.wikipedia.org/wiki/Help:Link), sort of (exact implementation in obsidian [[#^backlinks |here]])
- [[LaTeX]], with [[#^math-blocks |this]] syntax
- unique [[#Unique Obsidian syntax|obsidian syntax]]

---

### Community plugins

- **Unique plugins:**
	- **Dataview**
		- [Documentation](https://blacksmithgu.github.io/obsidian-dataview/queries/structure/)
		- generates data out of the [[#^properties|yaml properties]] of the notes
		- lets you manipulate this data through queries
		- _ubiquitous_
	- TagFolder
		- `Ctrl + P + Show Tag Folder`
		- shows tags like folders
		- ~~i know right~~
- **Maths**
	- [Link](https://www.youtube.com/watch?v=AaCVP7zqOMU&ab_channel=Omix) to "Epic Italian maths guy"
		- use [[#^latex-suite|latex suite]]
		- use [[#^tokyo-night|tokyo night]]
	- [[LaTeX suite]] ^latex-suite
		- adds snippets that look like [these](https://castel.dev/post/lecture-notes-1/)
		- you can add your snippets in the settings
- **Synchronization**
	- Discussion [thread](https://www.reddit.com/r/ObsidianMD/comments/v6otbu/how_to_sync_your_obsidian_vault_on_mobile_using/) on [[Git]] syncing
	- Remotely Save
		- [[OneDrive]] and other cloud services
		- Make it work:
			- enable it
			- give auth permission to your cloud service in the plugin settings
			- there's a button to remotely save (actually sync). Use it whenever. Both on phone and on desktop
		- big vaults break this plugin on mobile. It's hopeless, remotely save isn't a good long term option
- **Better code blocks**
	- [Code Styler](https://github.com/mayurankv/Obsidian-Code-Styler)
		- About the plugin
			- allows for inline code to be highlighted too with the [[Markdown#^fenced-syntax||fenced syntax]]
			- allows you to put [[#^backlinks |backlinks]] or [[Markdown#^links|markdown links]] in the comments of the code
				- these links won't update the [[#^graph|graph]]
	- Codeblock Customizer
		- Terrible
		- Don't waste time
- **Links**
	- [Bald guy](https://www.youtube.com/watch?v=Yzi1o-BH6QQ&ab_channel=ChristianLempa)
	- [Redhead](https://www.youtube.com/watch?v=W7kTtn9empU&ab_channel=NicolevanderHoeven)
	
---

### Themes

- **Tokyo Night**: ^tokyo-night
	- Pleasant
	- colors different header levels differently
	- colors bold text differently
	- code isn't dim like in the standard theme
	- optimal for notes
	- _just use this please_

---

### Shortcuts

- **Change shortcuts:**
	- Settings > Hotkeys
- `Ctrl + T`
	- new tab
- `Ctrl + O`
	- Search note
- `Ctrl + E`
	- Toggle reading mode
- `Ctrl + P`
	- Open command palette
- `Ctrl + N`
	- New Note
- **Mines:**
	- `Ctrl + B`
		- remove from Bold text
		- add to "`Toggle left sidebar`"
	- `Ctrl + I`
		- remove from toggle italic

---

### Commands

[[Fuzzy search]]. The best type of search
`Ctrl + P +:`
- `open in default app`
- `add file property`
- `clear file properties`
- `graph`^graph
	- open graph view
- `local graph`
	- open local graph
	
---

### Unique Obsidian syntax

- **Tags** ^tags
	- `#my-tag`
		- [[Naming conventions#^kebab-case|kebab case]]
		- put this anywhere in the note
- **Backlinks** ^backlinks
	- **Info:**
		- they're called that because "they also link back"
		- as in, you go to the other page and you're able to see pages that link back to it
		- when i put a space in the syntax it's because it's allowed and it doesn't change the display.
		- if I don't put the space, it means it's either not allowed or it changes the display. [[#^block-backlinks|Example]]
	- _\[\[note name\]\]_
	- _\[\[ note name |display name\]\]_
	- _\[\[ note name# a specific header |display name\]\]_
	- _\[\[ note name#^block-identifier |display name\]\]_ ^block-backlinks
		- mode on identifiers [[#^block-identifier|here]]
	- _!\[\[ note name# header \]\]_
		- renders what you're linking as a block quote
		- also used for pictures
		- no display name (display is customized already duh)
	- _\[\[#header in this file\]\]_
	- _\[\[ # header in this file |display name\]\]_
	- _\[\[ #^block-identifier-in-this-file |display name\]\]_
- **Block Identifier** ^block-identifier
	- `^my-identifier`
		- write this at the end of any line to set it as the line id
		- there needs to be a space before `^`
		- usable by [[#^block-backlinks|block-scoped backlinks]]
- **Front Matter** (**YAML**) ^properties
	- write `---` as the first line of the file and let the client do the rest.
	- again, what it's doing behind the scenes is simply writing [[YAML]].
	- default properties are:
		- tags: list of tags to associate
- **LaTeX typesetting** ^math-blocks
	- `{latex}$$ latex math goes here $$`
	- `{latex}$ inline math $` can be fused with other text (like I'm doing with inline code and this text)
	- that's it.
	- check [[LaTeX#^math-mode |this note]] to see wtf to put between `{latex}$$`
- [ ] **Checkboxes** ^checkboxes
	```
	[ ] - This is a checkbox
	[X] - This is a checked checkbox
	```
	
---

### Spell check

- The custom dictionary is located in
	- `C:\Users\<username>\AppData\Roaming\obsidian\Custom Dictionary.txt`
- You can disable it altogether
- You can add languages
- You can do this stuff I talked about from the settings
	- they're not exactly hard settings to find
	- which means, I'm _not_ gonna explain the procedure step by step
	- ~~you absolute fucking moron~~
	
---

### CSS Customization

- **Add a snippet**
	- Settings
	- Appearance
	- CSS Snippets
	- Open snippets folder
	- add a `.css` file
- Notes are not very wide on desktop. [Fix](https://forum.obsidian.md/t/how-to-get-a-lager-page-width-in-both-editing-mode-and-preview-mode/7555/4):
	- TL;DR:
		- Settings
		- Editor
		- Readable line length > off
		- NOW IT'S TOO WIDE
		- add this snippet to cap the size
			```css
			.markdown-source-view, .markdown-preview-view {
				max-width: 1500px;
				margin: auto;
			}
			```
		
---

### Plugin development