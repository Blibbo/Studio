---
tags:
  - web-development
  - package-manager
  - software
aliases:
  - Node Package Manager
---
---

### About npm

- It's package manager for [[Node.js]]
- handles dependencies for [[JavaScript]]
- these dependencies get installed into a super heavy folder at the root of your project called `node-modules`

---

### Commands

- `npm install package-name`
	- alias: `npm i package-name`
	- the package gets installed in your `node_modules` folder
	- the package gets registered in your `package.json` file (it gets created if it doesn't exist):
		- in the `"dependencies"` property, if you're manually running `npm install package-name`
		- in the `"devDependencies"` property, if you're installing it through a [[#^scripts|script]]
- `npm run scriptname`
	-  runs `"scriptname"` form your `package.json`:
		```json
		{
			"scripts": {
				"scriptname": "command-or-executable"
			}
		}
		```

---

### Default scripts I'll have to look at

- `{bash}npm run format`
	- need **prettier**
	- `prettier.config.js`
	- `{json}"scripts": {"format": "prettier --write src"}`
- `{bash}npm run lint`
	- need **ESLint**
	- `.eslintrc.js`
	- `{json}"scripts": {   "lint": "eslint src" }`
- `{bash}npm install --save-dev prettier eslint`