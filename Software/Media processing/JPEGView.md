---
tags:
  - open-source
---

---

### About JPEGView

- lean photo viewer and editor
- supports pretty much every popular photo format
- released under the [[GPL]]

---

### Configuration

- **Config file:**
	- open the program
	- right click inside the window
	- `Settings/Admin`
	- `Edit user settings...`
- **KeepParameters**
	- keep zoom and filters through image navigation
	- set to `true` or `false`
- **DefaultWindowRect=sticky**
	- keep window in place through zooming and navigating images (perfect for big desktops)
- **CPUType=SSE**
	- keep it from crashing
- **ShowFullScreen=false**
	- open images in windowed mode by default

---

### Bugs

- **JPEGView x64 portable crashes when dragging big images**
	- [Github issue](https://github.com/sylikc/jpegview/issues/53)
		- [thread i found this other thread on](https://github.com/sylikc/jpegview/issues/53)
	- **Fix:**
		- config file
		- `CPUType=SSE`

---

### Trivia

- developed by **David Kleiner**