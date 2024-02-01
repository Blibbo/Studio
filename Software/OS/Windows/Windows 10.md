---
tags:
  - closed-source
  - operating-system
---
---

### About Windows 10

- its code was leaked
- lol

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