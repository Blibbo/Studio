---
tags:
  - web-development
  - markup
  - language
aliases:
  - HyperText Markup Language
---
---

### About HTML

- not entirely [[XML]] compatible. XML's Syntax is stricter:
	- html has [[#^void-elements|self-closing tags]]
- an XML compatible version exists in the form of [[XHTML]]

---

### Tags

- **Common attributes**
	- **Info:**
		- `{html}<my-tag my-attribute='attribute value'>`
		- this is what an attribute looks like
	- these work on lots of tags
	- **List:**
		- `{javascript}title='a title'`
			- appears when you hover over the tag
- **Void elements** ^void-elements
	- A.K.A self-closing tags
	- they have no content
	- **List:**
		- `{html}<hr>`
			- horizontal row
		- `{html}<br>`
			- line break
		- `{html}<img src='same-folder-image.jpg' alt="for when the image doesn't load">`
			- block with image
- **Paired tags**
	- they have an end tag
	- `{html}<my-tag> content </my-tag>`
	- most common tags
	- **List:**
		- `{html}<h1> header level 1 </h1>`
			- `{html}<h2> level 2 </h2>`
			- `{html}<h6> last available header level </h6>`
			- they're headers. Search engines apparently use them to figure out what's going on in your page
		- `{html}<p>a paragraph</p>`
		- `{html}<textarea>default text</textarea>`
			- you can text inside this tag
		- **Inline blocks**
			- `{html}some text <span style="color:orange">inline stuff</span> more text`
				- generic inline element. Doesn't do much on its own
				- give it attributes to make this meaningful
				- this specific one renders as
					- some text <span style="color:orange">inline stuff</span> more text
			- `{html}<a href='url'>my anchor</a>`
				- alternative usage for href:
					- `{javascript}href='mailto:email@address.com'`
						- opens your email client automatically
					- `{javascript}href='#id-within-the-page'`
						- makes you jump to that place in the page
						- if you want to make this jump smooth you can use [[CSS#^smooth-scrolling|smooth scrolling]]
			- `{html}<strike>striked text</strike>`
				- <strike>striked text</strike>
			- `{html}<sub>subscript</sub>`
				- <sub>subscript</sub>
			- `{html}<sup>superscript</sup>`
				- <sup>superscript</sup>
	
---

### Character Entities

- Entity names
	- `&entity_name;`
		- lenient browsers let you omit the ; but the best practice is to put it
- Entity numbers
	- `&#50;`
	
- **Known entities**
	- `&nbsp;`
		- Non-breaking space
		- only way to add whitespace aside from `<pre>` tags
	- `&lt;` 
		- `<`
	- `&gt;`
		- `>`
	- `&amp;`
		- &
	- **Wrong encoding**/**wrong tools**:
		~~Think about your life if you need to know these~~
		- `&eacute;`
			- é
		- `&Eacute;`
			- É
		- `&egrave;`
			- è
		- `&Egrave;`
			- È
		- `&times;`
			- multiplication sign
			- a small x
		- `&sup2;`
			- ² power of 2 - power of two

---

### Trivia

- HTML was introduced by Tim Berners-Lee in the early 90's
- the idea was to have a markup language to structure documents on the web