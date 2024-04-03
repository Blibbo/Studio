
---

### About Babel

- can be used to translate modern [[JavaScript]] (ES6) into older versions
- commonly used in conjunction with [[React]] for [[JSX]]
- often integrated in build tools like [[webpack]] or [[npm]] scripts

---

### Config

- `babel.config.js`
- **Example config:**
	```javascript
	module.exports = {
	  presets: ['@babel/preset-env'],
	};
	```
	- this preset automatically figures out what the necessary plugins are