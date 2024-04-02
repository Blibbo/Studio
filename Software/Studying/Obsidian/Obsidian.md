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
- uses these tools for syntax highlighting in codeblocks:
	- [[Prism.js]] in reading mode
	- [[CodeMirror]] in editing mode
		- because CodeMirror is also Obsidian's text editor
	- there might be visual inconsistencies between the two modes.
- uses [[MathJax]] for rendering maths

---

### Rendering of Markdown in the client

- [Docs](https://help.obsidian.md/Editing+and+formatting/Advanced+formatting+syntax)
- basic [[Markdown#Syntax|markdown syntax]]
- most [[HTML]] syntax
- [[YAML]] format for [[#^properties|properties]]
- [Wikilinks](https://en.wikipedia.org/wiki/Help:Link), sort of (exact implementation in obsidian [[#^backlinks |here]])
- [[LaTeX]], with [[#^math-blocks |this]] syntax
- [[Mermaid]] for diagrams
- unique [[#Unique Obsidian syntax|obsidian syntax]]

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
- `Ctrl + Shift + V`
	- Paste as plain text
- `Ctrl + N`
	- New Note
- `Ctrl + Shift + I`
	- open developer console
- `Ctrl + ;` ^add-property-shortcut
	- add file property
	- [[#^add-property-command]]
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
- `buli`
	- `toggle bullet list`
	- turn the current line into a bullet list item
	- removes any other bullshit (checkbox, numbered list item or whatever else)
- `foldlist`
	- fold everything that's foldable in the note
- `unfoldlist`
	- unfold everything
- `yk`
	- `cycle bullet checkbox`
	- after `buli`. to make checkboxes
- `sright`
	- split right
- `sdown`
	- split down
- `defapp`
	- `open in default app`
- `add file property` ^add-property-command
	- [[#^add-property-shortcut]]
- `clear file properties`
- `graph`^graph
	- open graph view
- `local graph`
	- open local graph
	
---

### Community plugins

- **[[Dataview]]**
	- [Documentation](https://blacksmithgu.github.io/obsidian-dataview/queries/structure/)
	- generates data out of the [[#^properties|yaml properties]] of the notes
	- lets you manipulate this data through queries
	- _ubiquitous_
- **TagFolder**
	- `Ctrl + P + Show Tag Folder`
	- shows tags like folders
	- ~~i know right~~
- **[[LaTeX suite]]** ^latex-suite
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
- **Linter**
	- fixes ordered lists getting fucked up (and everything)
- **Links**
	- [Bald guy](https://www.youtube.com/watch?v=Yzi1o-BH6QQ&ab_channel=ChristianLempa)
	- [Redhead](https://www.youtube.com/watch?v=W7kTtn9empU&ab_channel=NicolevanderHoeven)
	- [average joe](https://www.youtube.com/watch?v=sTSgD4784gM)
	- [Omix](https://www.youtube.com/watch?v=AaCVP7zqOMU&ab_channel=Omix)
	
---

### Themes

- **Tokyo Night**: ^tokyo-night
	- `Accent: 255 128 251`
	- each header level has a unique color
	- _italic text_ is colored (a little aggressively)
	- code isn't dim like in the standard theme
	- very bad ==highlighting==
- **Blue Topaz**
	- uniquely colored headers
	- strong **bold**
	- _italic text_ is colored, but not aggressive
	- good ==highlighting==

---

### Unique Obsidian syntax

- [ ] **Checkboxes** ^checkboxes
	```
	[ ] - This is a checkbox
	[X] - This is a checked checkbox
	```
- ==Highlighted Text==
	- `==Highlighted Text==`
- **Bold text and _nested italic_ text**
	- `**Bold text and _nested italic_ text**`
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
		- if the header contains backlinks, you omit the square brackets
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
	- check [[LaTeX#^math-mode|this note]] to see wtf to put between `{latex}$$`
	
---

### CSS Snippets

- **Add a snippet**
	- Settings
	- Appearance
	- CSS Snippets
	- Open snippets folder
	- add a `.css` file
- **Note width**
	- [Source](https://forum.obsidian.md/t/how-to-get-a-lager-page-width-in-both-editing-mode-and-preview-mode/7555/4)
	- notes are not very wide on desktop
	- Fix:
		- Settings
		- Editor
		- `Readable line length` ${ \to }$ off
		- NOW IT'S TOO WIDE
		- add this snippet to cap the size
			```css
			.markdown-source-view, .markdown-preview-view {
				max-width: 1500px;
				margin: auto;
			}
			```
- **Invert images on dark mode**
	- you have to add `#invert_B` (or any other thing listed here) to the image you want to invert at the end of an image link, like _\!\[\[image#invert_B\]\]_
	```css
	/* General and default image blending */
	.theme-dark img {
	    display: block;
	    max-width: 80%;
	    padding: 0 auto 0 auto;
	    outline: none;
	    margin-left: auto;
	    margin-right: auto;
	    mix-blend-mode: screen;
	    filter: opacity(1);
	}
	  
	.theme-light img {
	    display: block;
	    max-width: 80%;
	    padding: 0 auto 0 auto;
	    outline: none;
	    margin-left: auto;
	    margin-right: auto;
	    mix-blend-mode: multiply;
	    filter: opacity(0.95);
	}
	  
	/*Emblemed images blending tweaks */
	  
	.theme-dark .popover.hover-popover .markdown-preview-view img {
	    mix-blend-mode: screen;
	    /*filter: opacity(1);*/
	}
	  
	.theme-light .popover.hover-popover .markdown-preview-view img {
	    mix-blend-mode: multiply;
	    /*filter: opacity(0.95);*/
	}
	  
	/* Image dynamic colors inversion */
	/* Aggiungi class per applicare l'effetto solo alle immagini SVG */
	  
	.theme-dark img[alt$="invert_B"] {
	  filter: invert(1) brightness(100%) saturate(3)
	}
	  
	.theme-light img[img$="#invert_W"] {
	  filter: invert(1) brightness(100%) saturate(0) hue-rotate(180deg);
	}
	  
	.theme-dark img[img$="invert_B_C"] {
	  filter: invert(1) brightness(100%) saturate(0) hue-rotate(180deg) contrast(1.5);
	}
	  
	.theme-light img[img$="#invert_W_C"] {
	  filter: invert(1) brightness(100%) saturate(0) hue-rotate(180deg) contrast(1.45);
	}
	```

- **Zoom on images when clicking them**
	```css
	.view-content img {
		max-width:100%;
		cursor:zoom-in;
	}
	
	.view-content img:active {
		cursor:zoom-out;
	}
	.view-content .markdown-preview-view img[referrerpolicy='no-referrer']:active,
	.view-content .image-embed:active {
		background:var(--background-primary);
		cursor:zoom-out;
		display:block;
		z-index:200;
		position:fixed;
		max-height:100%;
		max-width:100%;
		height:100%;
		width:100%;
		object-fit:contain;
		margin:0 auto;
		text-align:center;
		padding:0;
		left:0;
		right:0;
		bottom:0;
	}
	.view-content .image-embed:active img {
		top:50%;
		transform:translateY(-50%);
		padding:0;
		margin:0 auto;
		width:100%;
		max-height:100vh;
		object-fit:contain;
		left:0;
		right:0;
		bottom:0;
		position:absolute;
		opacity:1;
	}
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

### Automatic last vault opening

https://www.reddit.com/r/ObsidianMD/comments/p5f3m5/disable_automatic_open_of_last_vault/

---

### Ordered lists

https://forum.obsidian.md/t/automatically-keep-numbered-list-ordered-in-editor-adding-removing-swapping-pasting/28428/34?page=2

de-indent and then re-indent the first list item to fix the list

---

### Plugin development