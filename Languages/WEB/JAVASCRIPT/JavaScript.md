---
tags:
  - front-end
  - scripting
  - web-development
  - programming
  - language
aliases:
  - ECMAScript
  - LiveScript
  - Mocha
  - JS
---
**JavaScript** is a general-purpose, [[multi-paradygm programming language]].
It's used both for scripting and programming tasks.
[[browser|Web browsers]] have a built-in [[interpreter]] for this language.

---

## Built-in objects

### Object

### Array

### Function

### String

### Number

### Boolean

### Date

### Math

### RegExp

### Error

## Syntax

- VARIABLES
	- `{javascript}const MY_CONSTANT='FOO_BAR'` ^const
		- block scoped
	- `{javascript}let myVariable='bar'` ^let
		- block scoped
	- `{javascript}var myVariable='foo'`
		- **function scoped** (= bad. Don't use this. Ever)
			- meaning if you were to declare this `{js}myVariable` in a single for iteration, you'd be able to access it outside of the loop.
			- very frowned upon. (just declare it before the loop???)
- LOGICAL OPERATORS
	- `{javascript}&&` returns the first falsy or (if none falsy) the last truthy
	- `{javascript}||` returns the first truthy or (if none truthy) the last falsy
	- `{javascript}&& ||` ternary operator but you can decompose it.

- STRINGS
	- `{javascript}"string"`
	- `{javascript}'other string'`
	- ``{javascript} `${variable} string in the middle ${otherVariable}` ``
	
	- CONCATENATION
		- `{javascript}"string1"+"string2"=="string1string2"`
		- `{javascript}"string1"+3=="string13"`

- OBJECTS
	- ACCESS A KEY
		- `{javascript}myObject.exactStringName`
		- OR
			```javascript
			let variableContainingName = 'exactStringName'
			myObject[variableContainingName]
			```

	- LITERALS
		```javascript
		{
			key1: 'val1',
			method1: ()=>({})
		}
		```
		
	- COPY:
		- SHALLOW:
			```javascript
			const clonedObject = {...originalObject};
			JSON.parse(JSON.stringify(obj));
			```
			
			- still references original nested objects
			
		- DEEP:
			```javascript
			function deepCopy(obj) {
				let copy;

				if (obj instanceof Array) {
					copy = [];
					for (let i = 0; i < obj.length; i++) {
						copy[i] = deepCopy(obj[i]);
					}
				} else if (obj instanceof Object) {
					copy = {};
					for (let attr in obj) {
						if (obj.hasOwnProperty(attr)) copy[attr] = deepCopy(obj[attr]);
					}
				} else {
					copy = obj;
				}

				return copy;
			}
			```

- FUNCTIONS
	```javascript
	function myFunction(par=null){//par defaults to null
		return 3;
	}
	```

	- ANONYMOUS FUNCTIONS
		- `{javascript}function(){}`
	- ARROW FUNCTIONS ^arrow-functions
		- `{javascript}()=>{}`
			- `{javascript}{}` is a block of code. To return an object use `{javascript}({})`
		- `{javascript}(a,b)=>a+b`
		- `{javascript}()=>3`
		- `{javascript}par=>3`
		- `{javascript}par=>{}`
		
	- IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
		- `{javascript}(function(){}())` is invoked immediately

	- **Async Functions:** ^async-functions
		- **Info:**
			- allows parallel execution
			- normally: call function -> wait until it returns -> continue
			- async: call function -> continue & execute function in parallel
		- `{javascript}async function myFunction(){}`
		- `{js}await myFunction();`
			- call `{js}myFunction`, and decide to wait anyway.
			- it's like it's not async if you call it like this
			- they cancel out

- LOOPS
	- **For in**
		- loop through object properties
		```javascript
		for(const key in object){
			if(obj.hasOwnProperty(key)){
				//check if it's inherited by a superclass
			}
		}
		```
	- **For**
		- `{javascript}for(let i=0;i<10;i++){}`
- **Modules ([[#^ES6]]):**
	- `{js}export default variableToExport;`
		- you can only have one default export per module
	- `{js}export {multiple, names, toExport};`
		- you export names in this case
		- you can still `{js}export default` in the same module if you export names. You just need more `{js}export` statements.
	- `{js}import hisDefaultThing from './myModule';`
		- `{js}hisDefaultThing` takes the value of the `{js}default` export of the module. It can have whatever name regardless of the module
	- `{js}import {name1, name2} from './myModule';`
		- put the names in your scope
		- they're named exports
	- `{js}import defaultThing, {named, exports} from './myModule';`
		- import both the default `{js}export` and other names in one statement
- **Classes:** ^classes
	- [[#^ES6]] and higher:
		```javascript
		class Animal {
			constructor(name) {
				this.name = name;
			}

			sayHello() {
				console.log('Hello, my name is ' + this.name);
			}
		}
		
		class Dog extends Animal {
			constructor(name, breed) {
				super(name);
				this.breed = breed;
			}

			sayHello() {
				console.log('Hello, my name is ' + this.name + ' and I am a ' + this.breed);
			}
		}

		let myDog = new Dog('Buddy', 'Golden Retriever');
		myDog.sayHello(); // This will log: 'Hello, my name is Buddy and I am a Golden Retriever'
		```

	- **OLDER VERSIONS** (still supported):
		```javascript
		function Animal(name) {
			this.name = name;
		}

		Animal.prototype.sayHello = function() {
			console.log('Hello, my name is ' + this.name);
		}

		function Dog(name) {
			Animal.call(this, name);
		}

		Dog.prototype = Object.create(Animal.prototype);
		Dog.prototype.constructor = Dog;

		let myDog = new Dog('Buddy');
		myDog.sayHello(); // This will log: 'Hello, my name is Buddy'
		```

---

### FUNCTIONS

- `{javascript}setTimeout(function, delay);` delays execution, [[#^async-functions|async]]

- `{javascript}location.reload();` reload the page

- `{javascript}Date.now();`
	- get time in milliseconds
	- does the job
- `{javascript}performance.now();`
	- get the time in milliseconds
	- the precision is of 1/1000th of a millisecond
	- we going _PROFESSIONAL_ and shit

- `{javascript}encodeURI('your/whole/uri path.jpg');`
	- returns `{js}'your/whole/uri%20path.jpg'`
	- encodes the whole uri
- `{javascript}encodeURIComponent('just the thing with spaces');`
	- returns `{js}'just%20the%20thing%20with%20spaces'`
	- had I used slashes here, they would have gotten fucked up
	- i think css does this encoding on its own
		- but if you're using javascript you gotta do this
	
- `{javascript}document`
	- `{javascript}.querySelector('.myClass');`
		- returns the FIRST element to match a css selector
		- SYNTAX_ERR exception thrown if not found
		- [source](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
	- `{javascript}.querySelectorAll('.myClass');`
		- returns ALL elements matching the selector.
		- SYNTAX_ERR exception thrown if not found
	
- `{javascript}Math`
	- `{javascript}.round(myFloat);` rounds to the nearest integer
	- `{javascript}.sqrt(num);`
	- `{javascript}.pow(num, exponent);`
	- `{javascript}.abs(num);` makes it positive
	
---

### GLOBALS

- WINDOW AND SCREEN SIZE
	- `{javascript}window.innerWidth;` width of the browser window
	- `{javascript}window.innerHeight;` height of the browser window
	- `{javascript}screen.width` counts the entire screen
	- `{javascript}screen.height`
	- `{javascript}screen.availWidth` usable width
	- `{javascript}screen.availHeight` usable height
		- available height on screen
		- excludes windows bar and unavailable screen
	
---

### ARRAYS

- `{javascript}new Set(myArray);` return a Set object (removes duplicate elements)
- `{javascript}...myArray` destructures the array, returns a tuple.

- PROPERTIES
	- `{javascript}.length;` returns the length of the array.

- METHODS
	- `{javascript}.forEach(function(currentValue, index, arr), thisValue);`
		- iterates over every non-empty element. The function handles it
		- `{javascript}thisValue` is optional and it is the function's "`{javascript}this`" value
	- `{javascript}.filter(element=>element.valid);`
		- filters the array based on the children's "valid" attribute
	- `{javascript}.push('thing');` pushes thing. Increases length. Returns length. Easy
	- `{javascript}.pop();` removes last element, returns element
	- `{javascript}.shift();` removes first element, moves all the others to fill the empty position
	- `{javascript}.unshift('thing');` inserts as first, all the others get unshifted
	- `{javascript}.map(myFunction);`
		calls myFunction, passing on each element
		- the returned element replaces the old one in the array
		- map returns the new array and doesn't change the original
	- `{javascript}.filter(myFunction);`
		- filters the array
		- returns a new one
		- the function receives 1 element at a time and has to return a boolean
		- doesn't change the original

---

### OBJECTS

- METHODS
	- `{javascript}obj.hasOwnProperty(keyName);` check if the property is owned directly or inherited

---

### STRINGS

- **Literals:**
	- `{js}'valid literal'`
	- `{js}"also a valid literal"`
	- ``{js}`template literals can contain ${variables}` `` ^template-literals
- PROPERTIES
	- `{javascript}.length;` returns the number of characters in the string

- METHODS
	- `{javascript}.charAt(myIndex)`returns character at index
	- `{javascript}[myIndex]` character at index. Same thing as above
	- `{javascript}.toUpperCase()` returns string in uppercase
	- `{javascript}.toLowerCase()` _guess_
	- `{javascript}.substr(myInd);` returns the substring which starts at the given index
		- `{javascript}.substr(ind1, ind2);` starts at ind1 and ends at ind2
	- `{javascript}.split(" ");` splits the string at every iteration of the character in the brackets
	- `{javascript}.includes('other string');` checks whether the other string is present as a substring
	- `{javascript}.replace('to replace', 'new string');`
		- if you use regular expressions instead of "to replace" and add /g it replaces all instances

---

### HTML OBJECTS

- CLASS: `{javascript}HTMLElement`
	- NEW TAG:
		- `{javascript}class newElement extends HTMLElement{}`
	
- PROPERTIES
	- `{javascript}myElement.innerHTML` the html inside
	- `{javascript}myElement.textContents`
		- the text contained and with the formatting tags in it
		- EXAMPLE: text with `{html}<b>` and `{html}<span>` tags
	- `{javascript}myElement.innerText` only the text in the tag and the children tags

	- `{javascript}myRadioButton.checked` whether it's checked or not
	- `{javascript}myCheckBox.checked` whether it's checked
	- `{javascript}mySelectInput.selected` whether it's the selected input
	- `{javascript}.style`
		- object with every css property expressed in [[Naming conventions#^camel-case|camel case]]
	- `{javascript}.cssText`
		- all its style as a block of css

- EVENTS
	- `{javascript}myElement.addEventListener('eventName', myAction);`
		- this will pass an `{javascript}event` object onto the function
	- EVENT OBJECT
		- `{javascript}myEvent.timeStamp` when the event fired

- FORMS
	- `{javascript}myForm.addEventListener('submit', mySubmitAction);` fires when the form is submitted ^submit-event
		- then onto the mySubmitAction function:
			```javascript
			function mySubmitAction(event){
			event.preventDefault();/*DON'T send another http request with the form
				parameters*/
			}
			```
	
	- `{javascript}myForm.submit()`
		- submits the form with all the current input values inside of it.
		- doesn't trigger the [[#^submit-event|submit event]]
	
---

### Something about errors and exceptions

- write it god damn it

---

### CANVAS

- [Guide on frameworks](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial)

---

### STORAGE

- ABOUT STORAGE:
	- localstorage persists
	- sessionStorage is limited to the session
- `{javascript}localStorage.setItem('storageName', valueToSave);`
	- if the storage doesn't exist it sets up everything automatically
	- just call the function and don't worry about it
	- no imports required
- `{javascript}localStorage.getItem('storageName');` gets the value associated with the key
- `{javascript}localStorage.removeItem('storageName');` removes the entry from the storage entirely

- `{javascript}sessionStorage.setItem('storageName', valueToSave);`
- `{javascript}sessionStorage.getItem('storageName');`

---

### AJAX REQUESTS

- **axios** (external library)
- fetch API
	- the native browser tool for ajax requests
	- returns a promise
	- it's [[#^async-functions|async]]
	```javascript
	fetch('http://myEndpoint') 
		.then(myResponseHandler)
			//a function to handle the response parameter. You can inline it
			//Ex: .then(response=>response.json()). In this case, it returns another
			//promise, so you can use another then that will actually receive the json.
	```
	
---

### Json

- `{javascript}JSON.stringify(var);` makes the variable a json string
- `{javascript}JSON.parse(jsonString);` gives you the variable out of a json file
	
---

### Queries

- JavaScript query SDK??? wtf is that

---

### Quick Snippets

- **Sleep:**
	```javascript
	function sleep(seconds){
		return new Promise(resolve=>setTimeout(resolve, seconds*1000));
	}
	```
	- **Usage:**
		```javascript
		(async function(){
			await sleep(.1); //waits .1 seconds
		}());
		```
- **Format Object:**
	- `{js}JSON.stringify( object, null, 2 ); //needs <pre> tags`
- **Script injection URL:**
	- `{js}javascript:(function(){   /*your code*/   })();`
	- put a browser bookmark with this as the url, apply on any page by clicking the bookmark
	- the instructions must be semicolon-separated since it's only 1 line
	- **Google page:**
		- **Desktop:**
			- `{js}"APjFqb"`
				- search bar
			- `{js}document.getElementsByTagName('form')[0];`
				- form
		- **Mobile:**
			- `{js}"mib"`
				- input search bar
			- `{js}"tsbb"`
				- enter form button
			- `{js}"tsf"`
				- form
	
---

## History

### TL;DR

It was born as a [[scripting language]] for [[front-end]] work on browsers.
It was heavily standardized by [[ECMA]] and over the course of twenty years it became a full fledged programming language.
It can now be ~~(and is inexorably being)~~ used for any and everything.

### Timeline

- May 1995: a scripting language for [[Netscape]] begins being developed by [[Brendan Eich]].
  [[Netscape Communications Corporation|Netscape]] co-founder [[Marc Andreessen]] decides to call it **Mocha**.
  Brendan finishes developing Mocha in just **10 days**.
- December 1995: The language is released under the name **LiveScript** in Netscape Navigator 2.0 Beta
- December 1995: Netscape collaborates with [[Sun Microsystems]]. LiveScript's name is changed to **JavaScript**.
  This name was chosen to capitalize on the popularity of [[Java]]. It's a misnomer.
- 1997: Netscape submits their language to [[ECMA|ECMA International]] to standardize it (it was getting out of hand)
  ECMA calls the standard for the language **ECMAScript**.
  ECMA releases **ES1**, the first version of the standard, containing Netscape's submission, unchanged.

### Standards

[[ECMA]] has been standardizing JavaScript since 1997.

#### ES1

The first version of the standard contains the original submission by [[Netscape Communications Corporation|Netscape]], untouched.

#### ES2

1998\. Minor bug fixes.

#### ES3

1999\. Improvements in structured programming, support for [[Regex|regular expressions]] and exception handling

#### ES4

Abandoned for community backlash. ECMA failed hard and stopped for like ten years.

#### ES5

 2009\. This is like when they started making doctor who again.
This is the first time ECMA actually DID something.

ECMA-262 adds:
- [[JSON]] support (~~woulda been funny otherwise eh~~)
- [[#^strict-mode]]
- Tons of new methods for [[#arrays]]

#### ES6 / ES2015

ECMA changed naming conventions for the standard. They're now using years instead of version numbers. ^es6
This is the oldest version people still [[transpiler|transpile]] to sometimes.

ES6 adds:
- [[#^arrow-functions]]
- [[#^classes]]
- [[#^template-literals]]
- [[#^let]] and [[#^const]] (thank god)
- [[#^import]] and [[#^export]] (thank god v2)

That's it, it's an actual programming language from now on

#### ES2016 to 18

Major features:
- [[#^async-functions]]
- [[#^exponentiation-operator]]

#### ES2019

Major features:
- [[#^array-flat]]
- [[#^array-flat-map]]

#### ES2020

Major features:
- [[#^null-chaining]]
- [[#^nullish-coalescing-operator]]
- [[#^big-int]]

#### ES2021

Major features:
- [[#^promise-all-settled]]
- [[#^string-replace-all]]