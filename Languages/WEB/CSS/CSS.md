---
tags:
  - web-development
  - front-end
  - dsl
  - language
---
---

### About CSS

- stands for **Cascading Style Sheets**
- it's an [[DSL#External DSL (eDSL)|eDSL]] of [[HTML]] made for styling the document

---

### Syntax

- **Generic rule:**
	- `{css}selector{ property: value }`
	- a rule is a way to apply style to elements described by a [[#^selectors|selector]]

- **Selectors:** ^selectors
	- `{css}my-tag`
		- style applies to every `{html}<my-tag></my-tag>` in the document
	- `{css}.my-class`
		- style applies to every `{html}<my-tag class="my-class"></my-tag>` in the document
	- `{css}#my-id`
		- style applies to `{html}<my-tag id="my-id"></my-tag>`
		- there can only be one
	
---

### Properties

- `{css}transform:`
	- `{css}rotate(30deg)`
		- rotation is clockwise
		
---

### Quick snippets

- **NOT DRAGGABLE**
	```css
	* {
		user-drag: none;
		-webkit-user-drag: none;
		user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}
	```
- **Quick center app:**
	- **Through Flex:**
		```css
		html, body{
			height:100%;
		}
		body{
			display: flex;
			justify-content: center
			align-items: center;
		}
		```
	- **Through grids:**
		```css
		html, body{
			height:100%;
		}
		body{
			display:grid;
			place-items:center;
		}
		```
	- **Through Padding:**
		```css
		html, body{
			height:100%;
			width: 100%;
		}
		body{
			padding: auto;
		}
		```
- **Customize scrollbar**
	- **Info:**
		- [more about this](https://www.geeksforgeeks.org/how-to-change-style-of-scrollbar-using-tailwind-css/)
	- **Example:**
		```css
		::-webkit-scrollbar {
			width: 10px;
		}
		 
		::-webkit-scrollbar-track {
			background: #f1f1f1;
		}
		 
		::-webkit-scrollbar-thumb {
			background: #888;
			border-radius: 5px;
		}
		 
		::-webkit-scrollbar-thumb:hover {
			background: #555;
		}
		```
- **SMOOTH SCROLLING** ^smooth-scrolling
	- **Info:**
		- when you click an anchor tag with `{javascript}href="#myId"` within the page, it'll scroll smoothly
	- **Snippet:**
		```css
		scroll-behavior: smooth
		```