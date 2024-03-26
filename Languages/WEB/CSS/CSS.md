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

### Comments

`{css}/*this is a comment*/`
There's no `{c}//` comment. It's not supported. It's just `{css}/**/`.
CSS must work even if every newline character was deleted.

### Rules

Syntactically, a generic rule is text followed by curly braces:
`{css}some text{/*other text*/}`

A `.css` file can contain any number of rules, written one after the other.
You cannot nest them inside of those curly braces; exception made for a specific rule called a [[#media query]]. Don't go there yet though.

[[Whitespace]] between rules is irrelevant. You can even juxtapose them.

It's hard to give a general definition of what rules do, because it varies a lot.
They're just this language's instructions. It's what you can _do_, and it's ever expanding.

#### Selector Rules

These are the rules that make the most sense, and they're pretty much the main feature of CSS.
Selector rules are a way to apply style to elements.

Choose your elements through a [[#selectors|selector]], and write [[#properties]] inside.

`{css}selector{ property: value; other-property: other-value }`

The semicolon `{css};` is mandatory in between properties.
Not mandatory on the last property.

#### At-Rules

`{css}@at-rule{/*there could be anything here*/}`
These make CSS perform specific instructions. Their usage varies a lot.
A bunch of different @-rules exist.

##### Media query

The rule is `{css}@media`, but it requires more arguments. All the cases I know are listed here.

###### Screen Size

```css
@media screen and (max-width: 768px) {
  /* styles to apply on screens with a max width of 768px */
}

@media screen and (min-width: 992px) {
  /* styles to apply on screens with a min width of 992px */
}

@media only screen and (min-width: 320px) and (max-width: 1440px) {
  /* styles for devices with a screen width between 320px and 1440px */
}
```

##### Add Fonts

This rule is for adding fonts you download from the internet (in the form of [[ttf]] files).
```css
@font-face{
	src: url("<path-to-font>.ttf");
	font-family: font-name;
}
```
This allows you to make a new value `{css}font-name` that you can give the [[#^font-family]] attribute.

Example:
```css
h1{
	font-family: font-name;
}
```
This only works if you add the previous snippet above this one.

---

### Selectors

You need curly brackets `{css}{}` after any of these to turn them into rules.
I'm just specifically writing what kinds of selectors exist here.
See [[#selector rules]] for more context.

- `{css}my-tag`
	- style applies to every `{html}<my-tag>` in the document
- `{css}.my-class`
	- style applies to every `{html}<my-tag class="my-class">` in the document
- `{css}#my-id`
	- style applies to `{html}<my-tag id="my-id">`
	- there can only be one by definition
- `{css}first-tag second-tag`
	- every `{html}<second-tag>`,
	  that is found inside a `{html}<first-tag></first-tag>`
	- You need to put any kind of [[whitespace]] between `{css}first-tag` and `{css}second-tag` in order for this to work. It's most commonly found exactly as I wrote it, with a single space between the two tags.
	- You can chain multiple tags, not just two. The rule refers to the last and becomes more specific in its ancestry requirements.
- `{css}*`
	- every tag in the document
	
---

### Units

Values in CSS require an unit of measure attached to them.
Examples: `{css}10px` `{css}3deg` `{css}3%`.

#### Length

- `{css}px` ^px
	- Length expressed in [[pixel|pixels]].
- `{css}%` ^percent
	- Length expressed in percentage relative to the parent's matching dimension. Width on width, height on height.
	  
	- This unit **BREAKS** and its values equate `{css}0` if there's no ancestor element with a size explicitly set.
	  For example: if the parent's width is [[#^fit-content]] and then the content is like "`{css}10%` of the parent's width" it'll make no fucking sense. **_✨don't be a dumbass✨_**
	  
	  It's not all your fault if it breaks though. It's picky.
	  The rule is: at least one parent must have its size set _**[[#^px|in pixels]]**_.
- `{css}rem` ^rem
	- Relative to document root font size.
	- Without tweaking settings, most browsers view fonts at `{css}16px`.
	  So on average, `{css}1rem` ${ \to }$ `{css}16px`, `{css}2rem` ${ \to }$ `{css}32px`.
	  Just keep in mind that it's not always the case.
	- This unit is the standard in the industry.
	  They settled on this one for cross device compatibility.
- `{css}em`
	- Size is relative to the font size of the current element.
	- Similar to [[#^rem]].

#### Angles

- `{css}deg` ^deg
	- Angle expressed in [[degree|degrees]].

---
h
## Properties

These are the existing properties that you can assign to elements through selectors.
See [[#Selector Rules]] for more context.

I'm listing the ones (almost) all elements have in common.

- `{css}font-family: font1 font2 font3` ^font-family
	- Specify the element's [[font]].
	- You can 
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