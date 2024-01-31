---
tags:
  - cloud
  - web-hosting
  - service
---
---

### README.md

- [[GFM]]

---

### Cloning repos

Info on how this works [here](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories)
Generally, you have 2 types of URLs
- [[HTTP]] urls
	- to clone, use:
		- `{git}git clone https://github.com/user/repo.git`
- [[SSH]] urls
	- idk what to do with these.
	- urls look like this:
		- `git@github.com:user/repo.git`
		
---

### Github Gists

- they must be made through GitHub
- one or more files but no directories
- there's an underlying repository, the webpage displays the [[Git#^main-branch|main branch]]

- **work on the underlying repository:**
	- can't push directories
	- can push branches
		- they won't be displayed on the site
		- people will still see them if they clone the repo
	- there's an "open repository" button on the site that prompts you to open either a [[#clients|github client]] or [[Visual Studio]]
	- you can also clone it yourself with [[Git]] through `git clone https://gist.github.com/yourUser/the-gist-id`

---

### Clients

- The [website](https://github.com/)
- GitHub Desktop
	- very easy, very user friendly. Can't say there's anything that bothers me at all so far
- Git Kraken
	- I worked with a company that said it's "the best client"
	- there's some important feature that must be paid for but I can't quite remember what it was

- **MOBILE CLIENTS:**
	- Github official app
		- read-only
	- Working Copy
		- 19.99 USD one-time payment
		- to open files with markdown support, you need either
			- Pretext
			- iAWriter