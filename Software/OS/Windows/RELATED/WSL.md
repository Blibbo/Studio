---
aliases:
  - WSL2
  - wsl.exe
  - Windows Subsystem for Linux
---
Optional [[Windows]] feature that offers [[Linux]] compatibility.
Allows you to install as many [[Linux#distros]] as you like.

Linux files are in a virtual disk named `ext4.vhdx`, located typically in `%userprofile%\AppData\Local\Packages\Canonical...\LocalState\ext4.vhdx`

---

## Installation

- [Docs by Microsoft](https://learn.microsoft.com/en-us/windows/wsl/install)
- requires a [[Windows 10]] build above **19041** or a subsequent [[Windows]] version
	- check version through [[Windows#^msinfo32|this]] command
- `wsl.exe` available in the Microsoft Store (look for "**Windows Subsystem for Linux**")
- this executable handles [[Linux]] distros in your windows pc
- it goes in the [[Windows#^path|Path]] by default after installation from the store

---

## Commands

- **Info:**
	- if you run any of these inside a wsl, you must use `wsl.exe` instead of just `wsl`
- `wsl`
	- open linux terminal. Either on the start menu or any command prompt
	- a distro must be installed first. Even if it's just the default one through `wsl --install`
- `wsl --install`
	- [[Powershell]] as administrator
	- by default installs [[Ubuntu]]
	- default WSL version is 2
- `wsl --list --online`
	- see a list of available distros
	- also `wsl -l -o`
- `wsl --install -d <DistroName>`
	- install a new distro
- `wsl -l -v`
	- see installed distros
	- also tells you if they're installed on WSL 1  or WSL 2
	- these two architectures are very different, don't fuck around or try to change them for a specific distro
- `wsl --set-version Ubuntu-20.04 2`
	- so anyways, here's how to fuck it up:
	- it's not guaranteed to work, microsoft says to back up your data and that it can "lead to failures"
	- just don't, newly installed versions will be set to WSL 2 by default
- `wsl --set-default-version <Version#>`
	- `<Version#>` is either 1 or 2
- `wsl -s <DistributionName>`
	- set default distro (when you type `wsl`)
	- also `wsl --set-default <DistributionName>`
	- example: `wsl -s Debian`

---

## Communicating with Windows

To access WSL files from Windows, you can use the `\\wsl$\<distro_name>` path, or the newer `\\wsl.localhost\<distro_name>`.
Within this `<distro_name>` directory (e.g. `Ubuntu`) your filesystem is in `\home\nkp68`

To access Windows drives (e.g. `C:\`) from WSL you can use the `/mnt/<drive>` path, for example `/mnt/c`

https://askubuntu.com/questions/1380253/where-is-wsl-located-on-my-computer

---

## Troubleshooting

#### `Wsl/CallMsi/E_ABORT` error

```shell
WSL is finishing an upgrade...
Update failed (exit code: 1603).
Error code: Wsl/CallMsi/E_ABORT
```
- apparently wsl was already installed and it said this whenever i tried using any command
- i didnt remember installing wsl at all. i didn't use it on that laptop
	- it was a windows 10 build 19045 laptop (compatible)
- **I'm not sure what fixed it**
- first, I did this after lurking the web for a while:
	- opened an administrator mode [[Powershell]]
	- entered this `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux`
	- didn't do shit
	- idk y i thought it'd work. [here](https://learn.microsoft.com/en-us/windows/wsl/troubleshooting)'s the article i was reading
- then, i used [[Revo Uninstaller]] to cancel wsl from the face of the planet
- restarted my pc
- installed wsl from the microsoft store
- restarted my pc
- used `wsl --install` (ubuntu didnt prompt me to create an user. it asked to reboot the pc instead)
- restarted my pc
- `wsl` said i didnt install distros yet. I did `wsl --install` again and ubuntu finally prompted me to make an user
- **works :thumbsup:**

#### I can't see Linux on the explorer anymore

this thread: https://answers.microsoft.com/en-us/windows/forum/all/why-there-is-linux-in-my-file-explorer-bar/c7aaca2b-7e7d-4cd2-bb80-6a4cde330433

it totally doesn't work btw. I don't have it on the explorer anymore and that's that