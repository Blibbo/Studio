---
tags:
  - scripting
  - software
---
---

### About Git Bash

- it's [[Bash]] but you can use it on [[Windows]]
- which is cool as fuck cuz you can use stuff like [[Tmux]]

---

### Unique commands

- `winpty`
	- run something as windows console

---

### Stuff you wouldn't be able to do on Windows

- `program & other-program`
	- run in parallel
	- example: `php -S localhost:8000 -t public & npm run dev` for [[Laravel]] with [[Vite]] (typical for [[Laravel Sail]])
	- without it, you just need two separate [[Command Prompt|shells]]