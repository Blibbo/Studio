---
tags:
  - software
aliases:
  - v
  - Vi Improved
---
---

### About Vim

- ~~text editor for elitist pricks~~
- successor to [[Vi]]
- typically [[Unix]]
- already installed by default on some Unix systems
- [[Windows]] versions exist too
- it's a text editor that has a [[#^keybindings|trillion keybindings]] that are very popular to move through text
- [[Microsoft]] might have made [[Visual Studio Code]] because Vim is so popular as a text editor and microsoft had nothing on them

---

### Keybindings ^keybindings

1. **Movement Commands:**
    - `h`, `j`, `k`, `l`: Move left, down, up, and right respectively.
    - `w`, `b`: Move forward by word, move backward by word.
    - `0`, `$`: Move to the beginning and end of the line respectively.
    - `gg`, `G`: Move to the beginning and end of the file respectively.
    - `Ctrl + u`, `Ctrl + d`: Scroll up and down half a page.
2. **Editing Commands:**
    - `i`, `I`: Enter insert mode before the cursor, at the beginning of the line.
    - `a`, `A`: Enter insert mode after the cursor, at the end of the line.
    - `o`, `O`: Open a new line below or above the current line and enter insert mode.
    - `x`, `dd`: Delete character under the cursor, delete the entire line.
    - `u`, `Ctrl + r`: Undo, redo.
3. **Visual Mode:**
    - `v`: Start character-wise visual mode.
    - `V`: Start line-wise visual mode.
    - `Ctrl + v`: Start block-wise visual mode.
4. **Copy and Paste:**
    - `yy`: Yank (copy) the current line.
    - `p`, `P`: Paste after, paste before the cursor.
5. **Search and Replace:**
    - `/`: Start searching forward.
    - `?`: Start searching backward.
    - `n`, `N`: Move to the next, previous search result.
    - `:s/old/new/g`: Replace all occurrences of "old" with "new" in the current line.
    - `:%s/old/new/g`: Replace all occurrences of "old" with "new" in the entire file.
6. **Save and Quit:**
    - `:w`: Save the current file.
    - `:q`: Quit Vim.
    - `:wq` or `:x`: Save and quit.
    - `:q!`: Quit without saving changes.
7. **Miscellaneous:**
    - `ZZ`: Save and quit (alternative to `:wq`).
    - `.`: Repeat the last change.
    - `Ctrl + w + w`: Switch between split windows.
    - `:e <filename>`: Open a new file.

---

### Finish this page

- [Overenthusiastic VIM guy](https://www.youtube.com/watch?v=13gNtgqzzmM&ab_channel=DistroTube)