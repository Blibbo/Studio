---
tags:
  - web-development
  - markup
  - language
aliases:
  - HyperText Markup Language
---
[[Rich text]] format and [[markup language]].




---

## Syntax

The most important element of syntax is the **tag**.
Each tag represents a [[Box Model]] in the [[DOM|DOM Tree]].

`{html}<my-tag>my box model content</my-tag>`

Tags

Tags can have attributes:

`{html}<my-tag my-attribute="my value">`

## Tags

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

## Character Entities

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

## Trivia

HTML's syntax is not entirely [[XML]] compatible.
XML's Syntax is stricter: HTML has [[#^void-elements|self-closing tags]].
An XML compatible version exists, it's called [[XHTML]]

### History

- HTML was introduced by Tim Berners-Lee in the early 90's
- the idea was to have a markup language to structure documents on the web
- **History: (chat gpt, ill fix l8er)**
	- **other answer**
		- HTML5 was developed by the Web Hypertext Application Technology Working Group (WHATWG) and later by the World Wide Web Consortium (W3C)

	- HTML (Hypertext Markup Language) has evolved through different versions over the years, with each version introducing new features, improvements, and adjustments to accommodate the changing landscape of web development. Here's an overview of the major versions of HTML:

1. **HTML 2.0:**
    
    - Published in 1995.
    - Introduced the basic structure of HTML, including headers, paragraphs, lists, links, and images.
    - Limited in features compared to later versions.
2. **HTML 3.2:**
    
    - Published in 1997.
    - Added support for tables, applets, text flow around images, and text alignment.
    - Introduced the concept of forms.
3. **HTML 4.01:**
    
    - Published in 1999.
    - Introduced style sheets (CSS) for the first time, providing more control over the presentation of web pages.
    - Expanded support for scripting languages like JavaScript.
    - Improved accessibility features.
4. **XHTML (Extensible Hypertext Markup Language):**
    
    - XHTML 1.0 was published in 2000, and later versions included XHTML 1.1.
    - XHTML aimed to bring the strict syntax rules of XML to HTML.
    - Introduced the concept of well-formed documents with XML-like syntax.
    - XHTML was intended to be compatible with XML tools.
5. **HTML5:**
    
    - HTML5 emerged as a separate effort around 2004, with its first draft published in 2008.
    - Developed by the Web Hypertext Application Technology Working Group (WHATWG) and later by the World Wide Web Consortium (W3C).
    - HTML5 brought new features, including multimedia elements (audio and video), canvas for drawing graphics, local storage, and improved semantic elements.
    - Introduced a more consistent parsing model, making it more forgiving of syntax errors.
    - Enhanced support for mobile devices and responsive web design.
    - HTML5 is the current and widely adopted version of HTML.

**Most Popular Version:**

- HTML5 is the most popular and widely adopted version of HTML. It is supported by modern web browsers and provides a robust set of features for web development.
- HTML5 is favored for its simplicity, flexibility, and support for multimedia, making it suitable for a wide range of applications, including mobile development and interactive web content.

**Changes Over the Years:**

- HTML has undergone significant changes over the years to keep up with the evolving needs of web development.
- The move from XHTML back to HTML5 reflected a shift towards a more forgiving syntax and a focus on practical development needs.
- HTML5 introduced a more semantic and structured approach to web content, making it easier for developers to create accessible and maintainable websites.

In summary, HTML has evolved from its early versions to the current HTML5, which is widely embraced for its versatility and support for modern web development practices.