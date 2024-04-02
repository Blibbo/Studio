---
tags:
  - markup
  - language
---
[Status::unfinished] [[#^incomplete]]

## Ecosystem

### LaTeX Distributions

```dataview
TABLE FROM "Languages/MARKUP/LATEX/DISTRIBUTIONS"
```

---

### TeX Engines

The underlying typesetting engine for LaTeX is called [[TeX]], which is an old program. However, they made new engines and they're listed here. They're all TeX engines, but newer.

They're basically compilers. They take your code and produce a formatted document with a proper format, for example [[pdf]], [[DVI]] (Device Independent) or [[PostScript]]. An engine's job is to:
- interpreting LaTeX markup
- executing macros
- resolving cross-references
- managing fonts
- generating the output file

```dataview
TABLE FROM "Languages/MARKUP/LATEX/ENGINES"
```

---

### Editors

Code editors specialized in LaTeX and integrated with the other tools above.

```dataview
TABLE FROM "Languages/MARKUP/LATEX/EDITORS"
```

---

## LaTeX Syntax

The syntax for this markup language consists in plain text mixed with commands.
Commands are preceded by backslashes (`\`).
There are a few additional syntax elements, like the comment (ignored by compilers):

- `{latex}% this is a comment`

### Commands

- `{latex}\documentclass{classname}` ^documentclass
	- **valid classnames:**
		- `article`
- `{latex}\usepackage{packagename}`
	- typically done in the preamble (zone between [[#^documentclass|documentclass]] and [[#^begin-document|begin document]])
	- adding packages adds features to the document
		- examples are font styles, mathematical symbols, graphics support and much more
	- **Packages:**
		- **ADD TO NOTES:** ^incomplete
			- stuff from [this](https://www.physicsread.com/latex-real-number/) link
		- `amsmath` ^amsmath
			- Math stuff.
		- `babel` ^babel
		- `biblatex` ^biblatex
		- `fancyhdr` ^fancyhdr
			- Fancy headers and footers.
		- `geometry` ^geometry
			- Customize the page structure with more advanced geometry
		- `hyperref` ^hyperref
		- `listings` ^listings
			- Code listings (wtf is that???)
		- `natbib` ^natbib
		- `tikz` ^tikz
			- Graphs and stuff.
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

### Math Mode

When you see `{}` for a command's arguments, it can often be omitted for lone values.
Example: `{latex}A^3` vs `{latex}A^{3}`

[LaTeX Formal Methods Reference](https://www.cs.put.poznan.pl/ksiek/latexmath.html)

#### Commands

- `{latex}\{\}`
	- $\{\}$
	- Escape curly brackets to actually write them.
	  Normally, curly brackets refer to parameters for other commands. That's why there's this syntax.
	  
- `{latex}\text{plain text}` [Package::amsmath] ^text
	- whitespace in text gets normally erased in math mode
	- this fixes that
- `{latex}\neq` (also `{latex}\ne`)
	- $\neq$
- `{latex}x_{y}`
	- $x_{y}$
	- subscript
- `{latex}x^{y}`
	- $x^{y}$
	- superscript
- `{latex}\exists`
	- ${ \exists }$
- `{latex}\nexists` [Package::amssymb]
	- ${ \nexists }$
- `{latex}\in`
	- $\in$
- `{latex}\forall`
	- $\forall$
- `{latex}\subset`
	- $\subset$
- `{latex}\subseteq`
	- $\subseteq$
- `{latex}\supset`
	- ${ \supset }$
- `{latex}\supseteq`
	- ${ \supseteq }$
- `{latex}\emptyset`
	- ${ \emptyset }$
- `{latex}\varnothing`
	- ${ \varnothing }$
- `{latex}\pm`
	- ${ \pm }$
- `{latex}\mp`
	- ${ \mp }$
- `{latex}\cup`
	- $\cup$
- `{latex}\cap`
	- $\cap$
- `{latex}\wedge`
	- $\wedge$
	- AND
- `{latex}\vee`
	- $\vee$
	- OR
- `{latex}\sum_{i = 0}^{n}x+i`
	- $\sum_{i = 0}^{n}x+i$
- `{latex}\frac{x}{y}`
	- $\frac{x}{y}$
- `{latex}A \setminus B`
	- $A \setminus B$
- `{latex}\equiv`
	- $\equiv$
- `{latex}\symbol\limits_{under}^above`
	- $\sum\limits_{under}^{above}$
	- has to be a symbol, can't be [[#^text]]
- `{latex}\stackrel{above}{center}`
	- ${ \stackrel{above}{center} }$
- `{latex}\underset`
	- ${ \underset{below}{center} }$
- `{latex}\sim`
	- $\sim$
- `{latex}\circ`
	- ${ \circ }$
- `{latex}\circledcirc` 
	- ${ \circledcirc }$

### Marks

- `{latex}\boxed{x}` 
	- ${ \boxed{ x } }$
- `{latex}\underline{a}`
	- ${ \underline{e} }$
- `{latex}\dot{x}`
	- ${ \dot{x} }$
- `{latex}\overline{x}`
	- ${ \overline{x} }$

#### Cancel

- `{latex}\not expression`
	- ${ \not expression }$
	- negates the next thing you write
	- **Examples:**
		- `{latex}\not\in`
			- $\not\in$
		- `{latex}\not\subset`
			- $\not\subset$
- `{latex}\neg`
	- also negates the next thing
- `{latex}\cancel{expression}`
	- ${ \cancel{ \text{expression} } }$
- `{latex}\centernot {expression}` [Package::centernot]
	- ${ \centernot {expression} }$
### Environments

Environments are specific ways to organize math text. A generic environment may look like
`{latex}\begin{environmentname} <environment maths> \end{environmentname}`

#### Environment names

- `array`
	- align to the center, write one equation under the other
- `cases`
	- align to the left
	- big curly bracket
- `vmatrix`
	- matrix but with big pipes around it

#### Environment maths

- `{latex}equation1 \\ equation2`
	- equation 2 is on the next row
- `{latex}1 & 2 \\ 3 & 4`
	- `&` aligns the rows

#### Example environments

$\begin{cases} x=1 \\ x=2 \end{cases}$
`{latex}\begin{cases} x=1 \\ x=2 \end{cases}`

${ \begin{cases} true, & \text{if x=4} \end{cases} }$
`{latex}\begin{cases} true, & \text{if x=4} \end{cases}`


### Parentheses

These commands have to be followed by any bracket character.
Bracket characters are `{latex}(`, `)`, `[`, `]`, `{`, `}`.

#### Bad brackets

These work, but they don't specify whether the parentheses are left or right: you just specify the character.
[[#Good brackets]] use commands made specifically for left or right parentheses of each kind.
They're bad because they're said to behave a little worse than good ones.
- `{latex}(`
	- ${ ( }$
- `{latex}\big(`
	- ${ \big( }$
- `{latex}\Big(`
	- ${ \Big( }$
- `{latex}\bigg(`
	- ${ \bigg( }$
- `{latex}\Bigg(`
	- ${ \Bigg( }$

#### Good brackets

- `{latex}\left(\right)`
	- ${ \left(\right) }$
	- Will throw an error if there's no right one.
- `{latex}\bigl(`
	- ${ \bigl( }$
- `{latex}\Bigl(`
	- ${ \Bigl( }$
- `{latex}\biggl(`
	- ${ \biggl( }$
- `{latex}\Biggl(`
	- ${ \Biggl( }$

---

### Arrows

- [Reference](https://garsia.math.yorku.ca/MPWP/LATEXmath/node9.html)
- `{latex}\to`
	- ${ \to }$
	- also `{latex}\rightarrow`
- `{latex}\leftrightarrow`
	- $\leftrightarrow$
- `{latex}\implies`
	- ${ \implies }$
- `{latex}\impliedby`
	- ${ \impliedby }$
- `{latex}\Rightarrow`
	- $\Rightarrow$
- `{latex}\Leftarrow`
	- $\Leftarrow$
- `{latex}\Leftrightarrow`
	- $\Leftrightarrow$
- `{latex}\leftarrow`
	- $\leftarrow$
- `{latex}\nwarrow`
	- ${ \nwarrow }$
- `{latex}\nearrow`
	- ${ \nearrow }$
- `{latex}\swarrow`
	- ${ \swarrow }$
- `{latex}\searrow`
	- ${ \searrow }$

#### Font commands

Commands that change the font.
You can't preserve whitespace inside of font commands: can't put [[#^text]] inside of these
Math mode is for symbols, not paragraphs. So, fair enough.

- `{latex}\mathbb{Blackboard bold}`
	- $\mathbb{Blackboard Bold}$
- `{latex}\mathbf{bold font}`
	- $\mathbf{bold font}$
- `{latex}\mathscr{script font}`
	- $\mathscr{script font}$