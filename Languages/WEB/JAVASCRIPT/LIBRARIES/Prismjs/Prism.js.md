---
tags:
  - web-development
  - front-end
  - library
  - syntax-highlighting
---
---

### About Prism.js

- [[JavaScript]] library for syntax highlighting

---

### Docs

- [prismjs.com](https://prismjs.com/)
- **[Available languages](https://prismjs.com/#supported-languages)**

---

## Demo

![[Languages/WEB/JAVASCRIPT/LIBRARIES/Prismjs/index.html]]

## Installation

### CDN

```html
<head>
	<link href="https://unpkg.com/prismjs@v1.x/themes/prism.css" rel="stylesheet" />
</head>
<body>
	
	<pre><code class="language-css">my-class{
	color: red
}</code></pre>
	
	<script src="https://unpkg.com/prismjs@v1.x/components/prism-core.min.js"></script>
	<script src="https://unpkg.com/prismjs@v1.x/plugins/autoloader/prism-autoloader.min.js"></script>
	
	<script> Prism.highlightAll(); </script>
	
</body>
```

---

### [[npm]]

```shell
npm install prismjs
```

```js
import Prism from 'prismjs';
```

---

### Used by

```dataview
LIST FROM "Software" AND [[Prism.js]]
```