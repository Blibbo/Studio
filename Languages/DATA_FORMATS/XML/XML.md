---
tags:
  - markup
  - language
  - standard
aliases:
  - Extensible Markup Language
---
---

### About XML

- hierarchical structure
- uses tags
- its files have `.xml` extension

---

### Syntax

- `{xml}<?xml version="1.0" encoding="UTF-8"?>`
	- this is called the XML prolog
	- it should be optional by now, but I'm not sure whether parsers are just adding the line behind the scenes with default values
- `{xml}<my-tag>my value</my-tag>`
	- this is a tag.
	- tags can be nested
	- tags indicate properties

---

### Example XML file

- via [w3schools](https://www.w3schools.com/xml/xml_examples.asp)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<breakfast_menu>
	<food>
		<name>Belgian Waffles</name>
		<price>$5.95</price>
		<description>Two of our famous Belgian Waffles with plenty of real maple syrup</description>
		<calories>650</calories>
	</food>
	<food>
		<name>Strawberry Belgian Waffles</name>
		<price>$7.95</price>
		<description>Light Belgian waffles covered with strawberries and whipped cream</description>
		<calories>900</calories>
	</food>
	<food>
		<name>Berry-Berry Belgian Waffles</name>
		<price>$8.95</price>
		<description>Light Belgian waffles covered with an assortment of fresh berries and whipped cream</description>
		<calories>900</calories>
	</food>
	<food>
		<name>French Toast</name>
		<price>$4.50</price>
		<description>Thick slices made from our homemade sourdough bread</description>
		<calories>600</calories>
	</food>
	<food>
		<name>Homestyle Breakfast</name>
		<price>$6.95</price>
		<description>Two eggs, bacon or sausage, toast, and our ever-popular hash browns</description>
		<calories>950</calories>
	</food>
</breakfast_menu>
```