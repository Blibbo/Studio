---
aliases:
  - Windows Registry
---
I have no clue what this is. I saw it here:

![[WSL#I can't see Linux on the explorer anymore]]

specifically, I saw this code block in the thread:

```
Windows Registry Editor Version 5.00 

 

[HKEY_CURRENT_USER\Software\Classes\CLSID\{B2B4A4D1-2754-4140-A2EB-9A76D9D7CDC6}] 

@="Linux" 

"System.IsPinnedToNameSpaceTree"=dword:00000001

[HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Desktop\NameSpace\{B2B4A4D1-2754-4140-A2EB-9A76D9D7CDC6}]
@="Linux"
```