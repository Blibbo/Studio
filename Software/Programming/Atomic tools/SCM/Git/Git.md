---
tags: []
---
**Git** is an [[open source|open-source]] [[Software/OS/Windows/RELATED/SCM]] tool developed by [[Linus Torvalds]] using the [[C]] [[programming language]].
Git is distributed under the [[GPL]].

[Guide](https://dev.to/g_abud/advanced-git-reference-1o9j)

---

## To add

- [ ] how do remote repositories work
- [ ] git submodules
- [ ] forks, pull requests

## Tools

- **Remote services**
	- [[Github]]
	- [[GitLab]]
	- [[Bitbucket]]
- [[Git Bash]]
	- comes with git
- [[Git GUI]]
	- also comes with git
	
---

## Commands

- **Configuration**
	- [Help](https://www.linode.com/docs/guides/how-to-install-git-and-clone-a-github-repository/)
	- `{bash}git config --global user.name "First Last"`
	- `{bash}git config --global user.email "example@example.com"`
	- this is the signature displayed in the commits
- **Getting started**
	- **Cloning Repositories**
		- `{bash}git clone https://github.com/GithubUser/Repo`
	- **Making repositories**
		- `{bash}git init`
			- turn the current folder into a git repository.
			- from this point on, you can use git commands on the directory
			- it's pointless to make a repo locally if you don't have the command to upload it to github
			- and i didn't look it up
			- JUST CREATE THE REPO FROM THE [[Github]] WEBSITE
			- **DON'T GIT INIT YOURSELF**
- **INTER-BRANCH**
	- `{bash}git branch`
		- see branches
		- `{bash}git branch -r`
			- see remote branches
			- to exit this view press 'q'
	- `{bash}git checkout my/branch`
		- move to that branch
	- `{bash}git checkout -b new-branch`
		- copy current branch and paste to new branch AND checkout to it
	- `{bash}git fetch`
		- download the changes made to the remote repo (all branches)
		- your local branch is unchanged, you just download this "`origin/alt-version-of-your-branch`" thing
		- to get the new changes and actually see them in your branch you'd have to merge the remote's branch onto you. There's a command that fetches and then does that: [[#^git-pull|git pull]]
		- ~~see what's up~~
	- `{bash}git push origin branch-name` ^push
		- upload changes in your local branch to the remote repo's equivalent branch
	- `{bash}git merge other-branch`
		- incorporate the commits from `other-branch` to the branch you're in
		- before merging, move to other-branch and update it (through [[#^git-pull|git pull]]) first then come back and merge it
		- ~~worlds colliding~~
		- ~~reality can be whatever you want~~
	- `{bash}git pull` ^git-pull
		- fetch the changes made to the remote repo and then merge onto the local branch
	- `{bash}git branch -d your-branch`
		- delete branch
		- only works if already merged and ready to be deleted
		- `{bash}git branch -D your-branch`
			- forces deletion	
	- **DETATCHED HEAD STATE**
		- i don't know what it is
		- i got there by calling `{bash}git checkout on origin/the-branch-i-meant-to-go-to`
		- to get out type `{bash}git switch -`
		- it seems commits made there don't impact any branch unless you make it into a new one later
- **INTRA-BRANCH**
	- within your local repo
	- `{bash}git add .`
		- **Info:**
			- staging means the changes you add will be in the next commit
			- can't add an empty folder or file
		- stages all changes from the current directory
		- `{bash}git add myDir/*`
			- adds everything inside myDir. myDir is a directory inside the current directory
		- `{bash}git add myFile.txt`
			- adds the single file
	- `{bash}git reset .`
		- opposite of git add
		- you can pass different directories
	- `{bash}git commit -m "changed thing"` ^commits
		- commit staged changes and describe the change
		- message is under 50 characters
		- _after making the commit:_
			- the current branch will have a new node with what were your staged changes.
			- stage environment empties, everything is now marked as unmodified
	- `{bash}git status`
		- tells you which files are in the staging area
	- `{bash}git stash`
		- save all local changes without making any commit. Doesn't upload to server
		- `{bash}git stash pop`
			- get them back
		- `{bash}git stash list`
			- wtf is in my stash
	- **PRETEND TO DELETE**
		- `{bash}git rm --cached path/to/your/file`
			- `{bash}git rm -r --cached myfolder`
				- you need to do it recursively (-r) for folders
			- the file is still there after you run this
			- git will mark it as removed
			- if you [[#^push|push]] your changes, it'll disappear in the remote
	- **Discard changes**
		- `{bash}git checkout -- .`
		
---

## .gitignore

- [Documentation](https://git-scm.com/docs/gitignore)
- **Patterns:**
	- **About patterns:**
		- one per line
		- other gitignore files in the subdirectories can add more patterns
		- the one in the most sub-sub directory takes priority
		- if a gitignore in a parent directory has a folder with gitignores in its pattern, those gitignores are excluded (~~duh~~)
	- `{gitignore}/file`
		- file found in THIS directory the gitignore is in
	- `{gitignore}file`
		- ANY file called `{gitignore}file` in this directory and its subdirectories
	- `{gitignore}!file`
		- negates a pre-enstablished pattern
		- can't negate if the file's parent directory is excluded
		- if a pattern begins with a literal `{gitignore}!` use `{gitignore}\!`
	- `{gitignore}**`
		- everything in all directories
	- `{gitignore}/**`
		- everything inside this directory
	- `{gitignore}abc/**`
		- everything inside every folder named abc
	- `{gitignore}abc/**/b`
		- matches `{gitignore}a/b`, `{gitignore}a/x/b`, `{gitignore}a/x/y/b` and so on
	- `{gitignore}# Comment`
		- take a wild guess~~, dipshit~~
		
---

## Conventions

### Branch naming

1. **Master/Main Branch:** ^main-branch
    - `master` (for Git) or `main` (an increasingly popular alternative) is typically used for the main development branch where the latest stable code resides.
    
1. **Feature Branches:**
    - `feature/<feature-name>`: Naming convention for branches that add a new feature. For example, `feature/user-authentication`.
    
1. **Bug Fix Branches:**
    - `bugfix/<issue-number>`: Naming convention for branches that fix a bug or address a specific issue. For example, `bugfix/123`.
    
1. **Hotfix Branches:**
    - `hotfix/<version-number>`: Used for branches created to address critical issues in the production code. For example, `hotfix/1.2.1`.
    
1. **Release Branches:**
    - `release/<version-number>`: Created when preparing for a release, containing code that is intended for production. For example, `release/2.0.0`.
    
1. **Task Branches:**
    - `task/<task-name>`: Generic branch name for tasks that don't fit neatly into feature or bug fix categories. For example, `task/update-readme`.
    
1. **Environment Branches:**
    - `dev` or `development`: Used for ongoing development work and testing in a shared environment.
    - `test` or `testing`: Used for testing purposes.
    - `staging`: Used for staging code before deploying to the production environment.
    
1. **Personal Branches:**
    - Some developers prefix their branches with their username or initials to avoid naming conflicts in collaborative projects. For example, `john-feature-branch`
	
---

## Submodules

- check out [this](https://www.reddit.com/r/webdev/comments/yhie92/git_repo_inside_of_another_git_repo_is_this_an/) thread
- and [this](https://git-scm.com/book/en/v2/Git-Tools-Submodules) git feature

---

## Trivia

It has a github repo: [Github repo](https://github.com/git/git)
~~how do they push to the repo? [[#^git-push]]? is git being developed with git?~~