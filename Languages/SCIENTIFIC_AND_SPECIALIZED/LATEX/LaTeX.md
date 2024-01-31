---
tags:
  - markup
  - language
---
---

### About LaTeX

- its underlying typesetting engine is called [[TeX]]

---

### Syntax

- **Comments:**
	- `{latex}% this is a comment`
- **Commands:** 
	- `{latex}\documentclass{classname}` ^documentclass
		- **valid classnames:**
			- `article`
	- `{latex}\usepackage{packagename}`
		- typically done in the preamble (zone between [[#^documentclass|documentclass]] and [[#^begin-document|begin document]])
		- adding packages adds features to the document
			- examples are font styles, mathematical symbols, graphics support and much more
		- **Packages:**
			- **ADD TO NOTES:**
				- stuff from [this](https://www.physicsread.com/latex-real-number/) link
			```dataview
			LIST
			FROM "Languages/SCIENTIFIC_AND_SPECIALIZED/LATEX/Packages"
			```
	- `{latex}\begin{document}` ^begin-document
	- `{latex}$inline maths$` = `{latex}\(inline math\)` ^inline-math
		- $inline maths$
		- enter inline math mode
	- `{latex}$$math block$$` = `{latex}\[math block\]` ^math-block
		- $$math block$$
		- enter math block mode
		- takes a lot of space
		- it's centered
		- typically written over multiple lines
	- `{latex}\end{document}`
- **Math mode:** ^math-mode
	- **Info:**
		- [LaTeX Formal Methods Reference](https://www.cs.put.poznan.pl/ksiek/latexmath.html)
		- math blocks cancel out whitespace, to preserve it use [[amsmath#^text|\text]]
		- every time you see `{}`, it can often be omitted for lone values
	- `{latex}$\{\}$`
		- $\{\}$
		- normally, they refer to parameters
	- `{latex}$\neq$` (also `{latex}$\ne$`)
		- $\neq$
	- `{latex}$x_{y}$`
		- $x_{y}$
		- subscript
	- `{latex}$x^{y}$`
		- $x^{y}$
		- superscript
	- `{latex}$\in$`
		- $\in$
	- `{latex}$\forall$`
		- $\forall$
	- `{latex}$\subset$`
		- $\subset$
	- `{latex}$\subseteq$`
		- $\subseteq$
	- `{latex}$\cup$`
		- $\cup$
	- `{latex}$\cap$`
		- $\cap$
	- `{latex}$\wedge$`
		- $\wedge$
		- AND
	- `{latex}$\vee$`
		- $\vee$
		- OR
	- `{latex}$\not$`
		- negates the next thing you write
		- **Examples:**
			- `{latex}$\not\in$`
				- $\not\in$
			- `{latex}$\not\subset$`
				- $\not\subset$
	- `{latex}$\sum_{i = 0}^{n}x+i$`
		- $\sum_{i = 0}^{n}x+i$
	- `{latex}$\frac{x}{y}$`
		- $\frac{x}{y}$
	- `{latex}$\equiv$`
		- $\equiv$
	- `{latex}$\symbol\limits_{under}^above$`
		- $\sum\limits_{under}^{above}$
	- `{latex}$\sim$`
		- $\sim$
	- **Arrows:**
		- `{latex}$\rightarrow$`
			- $\rightarrow$
		- `{latex}$\Rightarrow$`
			- $\Rightarrow$
		- `{latex}$\Leftrightarrow$`
			- $\Leftrightarrow$
		- `{latex}$\leftrightarrow$`
			- $\leftrightarrow$
		- `{latex}$\leftarrow$`
			- $\leftarrow$
		- `{latex}$\Leftarrow$`
			- $\Leftarrow$
	- **Font stuff:**
		- **Info**
			- can't preserve whitespace
			- can't put `{latex}\text` inside of this
			- use markdown for formatting text. Math mode is for symbols, not paragraphs
		- `{latex}$\mathbb{Blackboard bold}$`
			- $\mathbb{Blackboard Bold}$
		- `{latex}$\mathbf{bold font}$`
			- $\mathbf{bold font}$
		- `{latex}$\mathscr{script font}$`
			- $\mathscr{script font}$