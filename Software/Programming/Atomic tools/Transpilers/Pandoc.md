---
tags: []
---
**Pandoc** is a [[FOSS]] markup document converter. Works for most known [[markup language|markup languages]].

[pandoc.org](https://pandoc.org/)
[Manual](https://pandoc.org/MANUAL.html)

---

## Tech employed

Pandoc is written in [[Haskell]].
Haskell libraries used:
- [[skylighting]] for highlighting code in various languages, for documents that include code blocks.
  [Relevant link](https://pandoc.org/chunkedhtml-demo/13-syntax-highlighting.html)

---

## Enhanced [[Markdown]]

Pandoc offers conversion to and from different markdown flavors, but it also supports its own "enhanced markdown"
The improvements of enhanced markdown over regular markdown are:
- support for [[YAML]]
- code blocks allow for syntax highlighting with an additional piece of syntax
  [more on this here](https://pandoc.org/chunkedhtml-demo/8.5-verbatim-code-blocks.html#fenced-code-blocks)
- better table formatting (markdown notoriously [[Markdown#^tables|sucks at tables]])

---

## Trivia

Pandoc was made by [[John MacFarlane|Dr. John MacFarlane]], who's a professor of philosophy.

---

# [[Haskell]] library

The core of pandoc is a library written in haskell.

---

# [[command-line program]]

The command line program uses the library.