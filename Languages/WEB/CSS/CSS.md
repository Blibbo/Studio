---
tags:
  - web-development
  - front-end
  - language
aliases:
  - Cascading Style Sheets
---
It's an [[DSL#External DSL (eDSL)|eDSL]] of [[HTML]] made for styling the document.

---

## Syntax

### Rules

Rules are the main feature of css.
A rule is a way to apply style to elements.
To make a rule, you choose your elements through a [[#selectors|selector]], and you write [[#properties]] inside.

Properties are where the actual style comes from: TONS of properties exist.
This is a generic rule: `{css}selector{ property: value; other-property: other-value }`

### Selectors

- `{css}my-tag`
	- style applies to every `{html}<my-tag>` in the document
- `{css}.my-class`
	- style applies to every `{html}<my-tag class="my-class">` in the document
- `{css}#my-id`
	- style applies to `{html}<my-tag id="my-id">`
	- there can only be one
- `{css}first-tag second-tag`
	- style applies to every `{html}<second-tag>` that is found inside a `{html}<first-tag></first-tag>`
	
---

## Properties

- `{css}transform:`
	- `{css}rotate(30deg)`
		- rotation is clockwise
		- center of rotation is
		
---

## Quick snippets

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