---
tags:
  - community
  - software
---
---

### About Discord

- made in [[Electron]]

---

### Text commands

- **How to use them:**
	- just send a message with the command text
- `{discord}s/to replace/with` ^substitute
	- edits the last message you sent by replacing `to replace` with `with`
	- reference to [[sed#^substitute|sed]]
	- doesn't do [[Regex|regex]]
- `+:emoji_name`
	- reacts to the latest message with the emoji
- `+:code` ^react-command
	- reacts with the emoji corresponding to the code
	- Ex: `+:+1` is the same as `+:thumbsup`

---

### [[IRC]] References

- **Compact mode** (Settings > appearance > compact mode)
- [[#^substitute|Substitute]]
- [[#^react-command|React command]]

---

### Message format

- Notes
	- it shares similarities with [[Markdown]]
	- guide [here](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-)
	
- Syntax
	- Spoiler
		```
		||spoiler||
		```
	- Link
		```markdown
		[link name](url)
		```
	- Header
		```markdown
		# header level 1
		## level 2
		### level 3 (max)
		```
	- Strikethrough
		```markdown
		~~strikethrough~~
		```
		- ~ is [[Windows#^tilde|Alt + 126]]
	- Italic
		```markdown
		_italic text_
		*also italic*
		italic*in*word
		```
	- Bold
		```markdown
		**bold text**
		__also bold text__
		bold**in**word
		```
	- Code blocks
		~~~markdown
		```
		your code
		```
		~~~
	- Code blocks, **Syntax Highlighting**
		~~~markdown
		```languagename
		your code
		```
		~~~
		- syntax highlighting is done with [[Highlight.js|hljs]]