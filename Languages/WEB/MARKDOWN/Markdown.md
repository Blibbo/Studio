---
tags:
  - markup
  - language
aliases:
  - .md
---
---

### About Markdown

- lightweight markup language
- made to be human-readable
- markdown files have a `.md` extension

---

### Documentation

https://www.markdownguide.org/basic-syntax/

---

### Syntax

- **Lists**
	- unordered ^unordered-list
		```markdown
		- this
		- is the syntax
		```
		- my favorite feature
	- ordered
		```markdown
		1. this
		2. is the syntax
		7. this renders as '3' regardless of the number
		```
- **Linking** ^links
	- Hyperlinks
		- \[link name\]\(url\)
	- Within the same page:
		- `[link name](#identifier)`
		- the identifier is the "id" (or "name" for anchor tags??) attribute of html tags
			- I haven't verified any of this info. It's all from this Stack Overflow thread:
				https://stackoverflow.com/questions/2822089/how-to-link-to-part-of-the-same-document-in-markdown
		- this should work when converting from markdown to any of these #markup languages:
			- [[HTML]]
			- [[LaTeX]]
			- [[ConTeXt]]
			- [[Textile]]
			- [[AsciiDoc]]
		- about headers:
			- the identifier name is automatically generated as a [[Naming conventions#^kebab-case|lower kebab case]] version of the header name
			- number of # doesn't matter, it's always just one in identifiers
			- you can generate the identifier manually:
				- `` # My Header {#my-identifier}
			- reported not to work for [[GitHub]] (which part? I must run some tests)
- **Code**
	- Basic code "block":
		- indent the line at its beginning.
		- whole line is code. Can't divide it. Markup doesn't work inside this line
		- if the line above is unindented text then it won't work
		- ~~absolutely insufferable behavior~~
		- ~~I hate it~~
	- Inline code:
		- `` `this is the syntax` ``
		- ` ``double backticks work`` `
		- can't work for more than 1 line
	- Fenced code blocks: ^fenced-syntax
		- ` ```fenced code block``` `
		- `~~~other fenced code block~~~`
		- it's basically just inline code. But this fenced syntax also does something [[#^syntax-highlighting|else]]
	- Multi-line code:
		- the only proper "BLOCK" of code
		- to make this block use [[#^fenced-syntax|fenced syntax]] BUT
			- ` ``` ` must be the first thing in the line
			- regular indentation doesn't bother it, as long as there aren't prefixes in the line (such as '-' for unordered lists)
			- if you indent it 2 times more than the line above it, it breaks
		- here's what the syntax looks like
			` ``` `
			` my multi-line`
			` code block `
			` ``` `
		- here's what the actual display looks like
			```
			my multi-line
			code block
			```
	- **Syntax highlighting:** ^syntax-highlighting
		- not all markdown editors support it
			- it's not a trivial task, so it usually requires other plugins
			- see more in #syntax-highlighting linked with javascript
				```dataview
				table
				where contains("#syntax-highlighting")
				where contains("[[JavaScript]]")
				```
		- only works for multi line blocks
		- write the language name after the first fence (\`\`\`)
			` ```javascript`
			` let i=0;`
			` ``` `
			- this renders as
			```javascript
			let i=0;
			```
		- just use this please?
- **Bold**
	```markdown
	**bold text**
	__other bold text__
	longword**but-this-part-is-bold**wordcontinues
	```
- _Italic_
	```markdown
	_italics_
	*more italics*
	```
- ***Bold and italic***
	```markdown
	***bold and italic***
	__*this works*__
	**_this works_**
	middle***of***word
	```
- Block quotes
	```markdown
	>this is a block quote
	>>this is a nested block quote in that block quote
	>### this is a header in the block quote
	```
	- '>' must be at the beginning of the line
	- indented lines under this will count as more block quote
	- renders as
		>this is a block quote
		>>this is a nested block quote in that block quote
		>### this is a header in the block quote
- ~~Strikethrough~~
	```markdown
	~~this is strikethrough text~~
	```
- Tables ^tables
	```markdown
	| my | super | table |
	|---|---|---|
	| which | has | a row |
	```
	- row above must be blank
	- can't be indented
	- ~~pisses its pants if startled~~
	- renders as

		| my | super | table |
		|---|---|---|
		| which | has | a row |
