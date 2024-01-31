---
tags:
  - closed-source
  - operating-system
---
---

### About Windows 11

- lol

---

### Sucky context menu

In 2023, microsoft said they would add an option to toggle the menu to the old one
it's jan 2024. Still no news
- **Regedit:**
	- [[Windows#^regedit]]
	- look for `HKEY_CURRENT_USER\SOFTWARE\CLASSES\CLSID`
	- make new key under `CLSID` called `{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}`
	- make new key under the newly made one called `InprocServer32`
	- double click this new one, set its value. Leave it blank, but set it anyways (important).
	- restart the pc
	- **Undo:**
		- look for `HKEY_CURRENT_USER\SOFTWARE\CLASSES\CLSID`
		- delete `{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}`
- **Administrator-mode [[Command Prompt]]:**
	- `reg add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve`
	- **restart file explorer:**
		- `taskkill /f /im explorer.exe`
			- _don't freak out_
		- `start explorer.exe`

---

### my fucking desktop is in onedrive

- go in `C:\Users\<your user>`
- if there isn't a `Desktop` folder, make one
- [[Windows#^registry-editor]]
- paste `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders` into the address bar