---
aliases:
---
Dataview is an [[Obsidian]] plugin that allows you to do exactly two things: [[#Indexing|index]] and [[#Querying|query]] your vault.

[documentation](https://blacksmithgu.github.io/obsidian-dataview/)
[dataview](https://github.com/blacksmithgu/obsidian-dataview) on [[GitHub]]

---

## Configuration

- `Settings > Dataview > Inline Field Highlighting in Reading View > false`
	- otherwise it conflicts with [[Code Styler]]
- `Inline Query Prefix`
	- {dataview}
- `JavaScript Inline Query Prefix`
	- {dataviewjs}

---

### Syntax

- **Index data in your note:** ^index-data
	- **Tags:**
		- [[Obsidian#^tags|Obsidian tags]]
	- **Bullet points:**
		- regular markdown [[Markdown#^unordered-list|unordered list]]
		- has to do with [[YAML]] but idk what.
		- how these get indexed is a mistery for now
	- **Front matter:**
		- [[YAML]] at the top of each file
		- already in the [[Obsidian#^properties|Obsidian specification]]
	- **Inline fields:** ^inline-fields
		- `Field Name:: value` ^values
			- if the field is alone in the line
		- surround with square brackets `[]` for putting it between sentences (multiple are allowed per line)
		- surround with parentheses `()` to hide the field name (still shows the value)
- **Data types:**
	- **Info:**
		- based on how you write [[#^values|values]] dataview indexes stuff according to the few types described here
	- `text`
		- for text wrapped in `""`
	- `date`
		- for dates written in this format: [[Date formats#ISO Date Format|YYYY-MM-DD]]
	- `object`
		- for objects that follow [[YAML]] syntax
	- `link`
		- [[Obsidian#^backlinks|obsidian links]]
	- `list`
		- [[JavaScript#ARRAYS|javascript arrays]]
	- `boolean`
	- `number`
- **Query your data:**
	- **DQL** (**Dataview Query Language**) ^DQL
		- **Info:**
			- reminiscent of [[SQL]]
			- also an [[DSL#External DSL (eDSL)|eDSL]]
			- how2query in your note:
				~~~
				```dataview
				query type
				FROM source (optional)
				data commands (optional)
				```
				~~~
		- **Query types:** ^dql-query-types
			- `LIST` ^dql-list
				- lists files
				- `LIST WITHOUT ID`
					- if you print [[#^dql-additional-info|additional info]], it won't print the original link to the file
					- won't print the group name in case of [[#^dql-group-by|group by]]
				- `LIST "File Path: " + file.folder + " _(created: " + file.cday + ")_"` ^dql-additional-info
					- Output: `- League of Legends: File Path: Games _(created: May 13, 2021)_`
			- `TABLE`
				- **Info:**
					- similar to [[#^dql-list|list]] but displays in tabular view
				- `TABLE WITHOUT ID`
					- to remove the header
				- `TABLE started, file.folder AS Path, file.etags AS "File Tags"`
					- multiple fields
			- `TASK`
				- [[#^tasks|tasks]] are the top level information
				- you can check/uncheck tasks
				- **Examples:**
					~~~
					```dataview
					TASK
					WHERE !completed
					SORT created ASC
					LIMIT 10
					GROUP BY file.link
					SORT rows.file.ctime ASC
					```
					~~~
			- `CALENDAR`
				- requires a field of type `date`
				- **Examples:**
					- Display a calendar where each note is a creation date
						~~~
						```dataview
						CALENDAR file.cday
						```
						~~~
		- **Sources:**
			- `#a-tag`
				- `#a-nested/tag`
			- `"full/folder/path"`
				- case sensitive
			- `"full/file/path.md"`
				- case sensitive
			- _\[\[note\]\]_
				- every note that links to _note_ (every [[Obsidian#^backlinks|backlink]])
			- _outgoing(\[\[note\]\])_
				- every link inside _note_
			- _\[\[\]\]_
				- every link to the current note
				- also _\[\[#\]\]_
			- **Additionally:**
				- `!`
					- "not"
					- blacklist that source
				- `and`
					- combines multiple sources
					- Ex: `#tag and folder`
						- both from that tag and in that folder
					- Ex: `#food and !#fastfood`
						- food and not fastfood
				- `or`
					- also combines multiple sources
					- Ex: `#tag or folder`
					- everything in that tag and also everything in that folder
				- `()`
					- group logically. For complex sources
					- Ex: `(#tag1 or #tag2) and (#tag3 or #tag4)`
		- **Data Commands:** ^dql-data-commands
			- `WHERE boolean expression`
				- returns pages where the boolean expression is true
				- **Examples:**
					- `WHERE key = "value"`
					- `LIST WHERE file.mtime >= date(today) - dur(1 day)`
						- files modified in the last 24 hours
					- arbitrary field `completed` set to false, more than a month old:
						- `LIST FROM #projects WHERE !completed AND file.ctime <= date(today) - dur(1 month)`
			- `SORT field1 order, field2 order`
				- you can sort on 1 or more fields. `field1` has priority in this case
				- **Orders:**
					- `ASC`: also `ASCENDING`
					- `DESC`: also `DESCENDING`
			- `GROUP BY (field) AS column-name` ^dql-group-by
				- displays only the keys by default (no repeats)
				- `{js}rows`
					- implicit field added
					- list of matching items per that field
					- you can chain it with a property of the individual field (like a foreach)
					- see first example to make it make sense
				- **Examples:**
					- `LIST rows.file.link GROUP BY type`
						- common use case to also display the content:
			- `FLATTEN (field) AS column-name`
				- only works if field-name is an array
				- **Example:**
					- `TABLE authors FROM #LiteratureNote FLATTEN authors`
						- authors is a list field
						- you'll see each entry individually now
						- a "file" column will be repeated once for every author in the literature note
			- `LIMIT 5`
				- the limit is 5
	- **Inline query:**
		- `` `=your query` ``
		- **Limitations:**
			- cannot access multiple files
			- no [[#^dql-query-types|query types]]
			- no [[#^dql-data-commands|data commands]]
		- **Available stuff:**
			- `this`
				- current file
			- _\[\[other page\]\]_
				- another file
			- every dql expression is valid
		- **Examples:**
			- `` `= this.file.name` ``
	- **[[JavaScript]] API**
		~~~
		```dataviewjs
		JavaScript here
		```
		~~~
	- **Inline Dataview JS**
		- `` `$=dv.current().file.mtime` ``
		
---

### Metadata

- **Info:**
	- this is the data you can query from each file
- [[Naming conventions#^kebab-case|lower kebab case]] version of the fields you typed in ([[#^inline-fields|these]]) stripped of their `** **` in case you bolded them
- **Implicit fields:
	- `{js}file` ^file
		- `{js}.name` the way Obsidian reads it (without extension)
		- `{js}.folder` the path inside the vault
		- `{js}.path` full path, name included
		- `{js}.ext` extension
		- `{js}.link` an [[Obsidian#^backlinks|obsidian link]]
		- `{js}.size` file size
		- `{js}.ctime` creation time [[Date formats#^extended-format|extended iso]]
		- `{js}.cday` creation day [[Date formats#^standard-format|normal iso]]
		- `{js}.mtime` time last modified
		- `{js}.mdate` date last modified
		- `{js}.tags` tags broken down by each level (lots of redundancy)
		- `{js}.etags` explicit tags. Just one big tag with slashes in between
		- `{js}.inlinks` incoming links
		- `{js}.outlinks` links in the file
		- `{js}.aliases` aliases defined in the frontmatter
		- `{js}.tasks` all tasks in the file
		- `{js}.lists` all lists in the file (bulleted or ordered)
		- `{js}.frontmatter` a list of all the frontmatter in `key | value` text
		- `{js}.date` only available if there's a `YYYY-MM-DD` or `YYYYMMDD` date in the file name or a field called `Date`
		- `{js}.starred` obsidian bookmark plugin
	- objects inside `{js}file.tasks` or `{js}file.lists` ^tasks
		- they inherit everything from [[#^file|file]]
		- `{js}.status` completion status as a string
		- `{js}.checked` whether it's completed
		- `{js}.completed` whether it's completed. Completion status character can be changed, `[x]` [[Obsidian#^checkboxes|by default]]
		- `{js}.fullyCompleted` whether this task AND its subtasks are all completed
		- `{js}.text` plain text of this task
		- `{js}.visual` the text of the task rendered by dataview and modifiable
		- `{js}.line` this task's line in the file
		- `{js}.lineCount` number of markdown lines this task takes up (along w subtasks)
		- `{js}.path` file path this task is in
		- `{js}.section` link to the section this task is contained in
		- `{js}.tags` task in the task
		- `{js}.outlinks` links in this task
		- `{js}.link` link to the closest linkable parent of this task. Exact blocklink works too if it has one
		- `{js}.children` list of subtasks
		- `{js}.task` whether it's a task or a list item
		- `{js}.annotated` true if it has metadata fields, false if it doesn't
		- `{js}.parent` line number of parent task (null if none)
		- `{js}.blockId` obsidian [[Obsidian#^block-identifier|block id]]
		
---

### Functions

- **Info:**
	- a lot of these functions accept AND return an array of inputs other than accepting the single input
	- this behavior is not mentioned case-per-case. It's implicitly there
- **Utility:**
	- `{js}date(today)`
	- `{js}default(field, value)`
		- if `{js}field` is `{js}null`, returns `{js}value`
	- `{js}choice(bool, left, right)`
		- rudimentary if statement
	- `{js}striptime(date)`
	- `{js}dateformat(date|datetime, string)`
	- `{js}durationformat(duration, string)`
	- `{js}localtime(date)`
	- `{js}meta(link)`
	    - `{js}meta(link).display`
	    - `{js}meta(link).embed`
	    - `{js}meta(link).path`
	    - `{js}meta(link).subpath`
	    - `{js}meta(link).type`
- **Constructors**
	- `{js}object(key1, value1, ...)`
	- `{js}list(value1, value2, ...)`
	- `{js}date(any)`
	- `{js}date(text, format)`
	- `{js}dur(any)`
	- `{js}number(string)`
	- `{js}string(any)`
	- `{js}link(path, [display])`
	- `{js}embed(link, [embed?])`
	- `{js}elink(url, [display])`
	- `{js}typeof(any)`
- **Numeric Operations**`
	- `{js}round(number, [digits])`
	- `{js}trunc(number)`
	- `{js}floor(number)`
	- `{js}ceil(number)`
	- `{js}min(a, b, ..)`
	- `{js}max(a, b, ...)`
	- `{js}sum(array)`
	- `{js}product(array)`
	- `{js}average(array)`
	- `{js}minby(array, function)`
	- `{js}maxby(array, function)`
- **Objects, Arrays, and String Operations**`
	- `{js}contains()` and friends
		- `{js}contains(object|list|string, value)`
			- searches if the object has key with the given name
			- if any list element equals the value
			- if the string has `{js}value` as a substring
		- `{js}icontains(object|list|string, value)`
			- case insensitive version
		- `{js}econtains(object|list|string, value)`
			- looks for the exact value
			- identical to `{js}contains` as far as i know. I'd have to test for differences
		- `{js}containsword(list|string, value)`
	- `{js}extract(object, key1, key2, ...)`
	- `{js}sort(list)`
	- `{js}reverse(list)`
	- `{js}length(object|array)`
	- `{js}nonnull(array)`
	- `{js}all(array)`
	- `{js}any(array)`
	- `{js}none(array)`
	- `{js}join(array, [delimiter])`
	- `{js}filter(array, predicate)`
	- `{js}map(array, func)`
	- `{js}flat(array, [depth])`
- **String Operations**`
	- `{js}regextest(pattern, string)`
	- `{js}regexmatch(pattern, string)`
	- `{js}regexreplace(string, pattern, replacement)`
	- `{js}replace(string, pattern, replacement)`
	- `{js}lower(string)`
	- `{js}upper(string)`
	- `{js}split(string, delimiter, [limit])`
	- `{js}startswith(string, prefix)`
	- `{js}endswith(string, suffix)`
	- `{js}padleft(string, length, [padding])`
	- `{js}padright(string, length, [padding])`
	- `{js}substring(string, start, [end])`
	- `{js}truncate(string, length, [suffix])`