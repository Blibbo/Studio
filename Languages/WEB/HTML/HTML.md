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

HTML's syntax looks similar to that of [[XML]], with a few additions.

### Tags

The most important element of syntax is the **tag**.
Each tag represents a [[Box Model]] in the [[DOM|DOM Tree]].

You can write anything as a tag name, and the tag will just inherit from the [[#^html]] tag.
There are tons of [[#Existing Tags]] though, the whole point of the language is to use those.

#### Paired tags

`{html}<my-tag>my box model content</my-tag>`

Paired tags are tags that must be closed. There's an opening and a closing tag.
The difference is the closing tag has a slash `/` before the tag name.

This syntax exists because you're allowed to write inside, in the _box model content_.

#### Self-closing tags

`{html}<my-tag>`
Self-closing tags, or **void elements**, don't have a closing tag.
Nothing more to it. You can't write in the content box.

### Attributes

`{html}<my-tag my-attribute="my value"></my-tag>`
They're properties. Information about the tags.

Both `{js}"my value"` and `{js}'my value'` are accepted.
Numeric values don't want quotation marks

there are lots of [[#Existing Attributes]] and the point, again, is to use those.
Attributes do all sorts of things to the tag.
Generally, their purpose is altering the box model or handling events.

---

## Existing Attributes

Most tags have these:

- `{js}style="property1: value1; property2: value2"`
	- applies [[CSS#Properties]] to the tag
- `{javascript}title="a title"`
	- `{js}"a title"` appears when you hover your mouse over the tag

---

## Existing Tags

Most of these are just the box model but with different default properties.
You can overwrite these default properties and then the distinction between different tags becomes irrelevant.

Default tags are not guaranteed to look the same in every browser, so you probably SHOULD overwrite their properties to make them look however you want them to look.

### Self-closing

- `{html}<hr>` ~~human resour~~Horizontal row
	- Very thin and very wide block.
- `{html}<br>` line break
	- Breaks text to go to the next line.
- `{html}<img>` image
	- Block containing an image.
	- `{js}src='<image path>.jpg'` where the image comes from
	- `{js}alt="text describing the image"`
		- for when the image doesn't load and for [[WCAG|Web Accessibility Guidelines]]

### Paired

If they made a default tag paired, you can assume it's not for no reason. Content matters here.

- `{html}<html></html>`
	- The king of tags. Every tag inherits this tag's properties.
- `{html}<div></div>` division/divider ^div
	- Generic block. It's the quintessential box model: it doesn't carry specific semantic meaning.
- `{html}<p></p>` paragraph
- `{html}<textarea>default text</textarea>`
	- The end user can write text inside this tag.

#### Headers

Content inside a header tag becomes a "big" header.

- `{html}<h1></h1>` header level 1
- `{html}<h2></h2>`
- `{html}<h3></h3>`
- `{html}<h4></h4>`
- `{html}<h5></h5>`
- `{html}<h6></h6>` header level 6

In practice, browsers have different opinions on what "big" means, so it's not a good idea to rely on their default style.
You should overwrite their style to get consistent render, so why not overwrite a [[#^div]]'s properties?
Do we _need_ header tags?

We do, because they're the **convention**:
- They get used in [[SEO]]. We settled on this tag name. Abide by the convention, get SEO privileges.
- If you follow the convention and make [[CSS#Rules]] that specify how these different header levels work, it'll be so much easier (for EVERYONE) to read and write `{html}<h1>`, rather than something like `{html}<div class="header-level-1">`

#### Inline Blocks

These blocks go in between words. Useful when, for example, when you want a specific word to be <span style="color:lime">green</span>.

- `{html}<span></span>`
	- Quintessential inline element.
	- This is the [[#^div]] of inline elements. No semantic meaning beyond being "inline".
	- ==Example:==
	- `{html}some text <span style="color:orange">inline stuff</span> more text`
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