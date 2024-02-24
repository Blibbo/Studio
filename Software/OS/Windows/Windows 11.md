---
tags:
  - closed-source
  - operating-system
aliases:
  - Windows 11 Pro
  - Windows 11 Home
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

[thread](https://answers.microsoft.com/en-us/windows/forum/all/why-are-my-desktop-files-located-in-a-onedrive/9c618093-b999-4da1-a931-02a0098ed244 )
- by default, [[Windows 10]] and Windows 11 have basically your entire user folder in onedrive. If you're familiar, it's obvious. If not, just look at all the little extra symbols in your desktop folder like "available on this pc" or "syncing"
- there is NO SCENARIO where you want your desktop in onedrive. None. Not one.
- **Fix this:**
	- **Make offline desktop folder:
		- open the file explorer
		- go in `C:\Users\<your user>`
		- if there isn't a `Desktop` folder, make one.
		- make a folder for every missing one. "Documents", "Pictures" and stuff.
	- **Change desktop folder from the online (onedrive) to the offline one
		- open the [[Windows#^registry-editor]]
		- paste `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders` into the address bar
		- right hand pane:
			- change any entry that has paths containing `Onedrive\something`, to the corresponding path in your userprofile, like `%USERPROFILE%\something`.
			- Don't use `C:\Users\youruser\Desktop` because that's not valid for all users.
		- Close the registry editor
			- use file explorer to move stuff from `onedrive\desktop` to your new desktop, and so on with the documents folder etc
	- **Restart**
		- not shut down. _Restart_ your pc.

---

### Windows/Temp/csat/csat.exe and csat_dwnldr.exe are in my windows defender


- [same exact problem](https://answers.microsoft.com/it-it/windows/forum/all/impossibile-rimuovere-elementi-da-escludere-dalle/b80372e5-ff79-4040-bcac-1188546d20ab)
	- they didn't answer him anything and the thread was locked
- [similar problem but this guy actually installed malware](https://www.reddit.com/r/windows/comments/131pk7n/i_cant_remove_greyed_out_these_exclusions_from/)
	- solution:
		- [[Windows#^regedit]]
		- `HKLM/Software/Policies/Microsoft/Windows Defender/Exclusions` ${ \to }$ grayed out exclusion entries
		- remove all of them (the whole key) or just the ones you need
		- just fyi `HKLM/Software/Microsoft/Windows Defender/Exclusions` are the non greyed out ones (yours, don't remove)
	- in my pc it's actually `Computer/HKEY_LOCAL_MACHINE/Software/Policies/Microsoft/Windows Defender/Policy Manager` and then `ExcludePaths`

---

### Recycle bin refuses to empty for no reason

- PORCO DIO WINDOWS.
- [this thread](https://answers.microsoft.com/en-us/windows/forum/all/recycle-bin-not-emptying/404e6fbc-3647-403e-84a1-b53821b119a6) says to run `rd /s /q C:\$Recycle.bin`, restart your pc and create and delete a text file to get the recycle bin back
- IT WORKS!

---

### Can't pin files to the taskbar

- https://www.youtube.com/watch?v=g-fmssCWEuo
- copy the file, turn it into an exe
- shift right click the pinned thing
- go to "properties"
- change the "target" property to the right extension
- you can delete the exe now. It works.