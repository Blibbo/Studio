---
tags:
  - web-development
  - front-end
  - library
  - syntax-highlighting
---
---

### About CodeMirror

- [[JavaScript]]
- Allows you to edit code inside a [[HTML#^text-area|text area]]

---

## Usage

```html
<!-- Create a textarea or other element to turn into CodeMirror -->
<textarea id="myTextarea">function myFunction() {
	console.log('Hello, CodeMirror!');
}</textarea>

<!-- Initialize CodeMirror -->
<script>
	var myTextarea = document.getElementById('myTextarea');
	var myCodeMirror = CodeMirror.fromTextArea(myTextarea, {
		mode: 'javascript',
		theme: 'dracula',
		lineNumbers: true,
		readOnly: false //you can turn it into a syntax highlighter
});
</script>
```

---

### Include it in your project

#### [[CDN]]

```html
<!-- Include CodeMirror CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.59.1/codemirror.css">

<!-- Include CodeMirror JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.59.1/codemirror.js"></script>

<!-- Include CodeMirror mode (choose the mode you need) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.59.1/mode/javascript/javascript.js"></script>

<!-- Include CodeMirror theme (choose the theme you prefer) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.59.1/theme/dracula.css">
```

---

#### [[npm]]

```bash
npm install codemirror
```

```javascript
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/theme/dracula.css'; // Create a textarea or other element to turn into CodeMirror
```

---

### Used by

```dataview
LIST FROM "Software" AND [[CodeMirror]]
```