---
aliases:
  - Structured Query Language
---
It's a [[DSL]] that allows you to interact with [[DB|databases]].
This DSL follows the principle of [[Declarative Programming]].
It's divided into four sub-languages: [[#DDL]], [[#DML]], [[#DQL]], [[#DCL]].

"SQL" refers to the standard. It's the ideal version.
There are many implementations of this standard, one of which is [[mysql.exe|MySQL]]

## DDL

Stands for **Data Definition Language**. Its purpose is working with definitions.

## DML

Stands for **Data Manipulation Language**. It works with actual data.

## DQL

Stands for **Data Query Language**. Allows you to query your data without interacting with it. It's just for reading it.
Implements [[Relational Algebra]] on your database.

### Join

[[Cartesian Product]]/[[cross product]] in SQL.

### Where

The `{sql}WHERE` clause implements [[selection]] in SQL.
It lets you choose rows based on conditions.

#### Comparison operators

These operators are used to build conditions next to the where clause.
Example: `{sql}WHERE field = 'mario'` chooses rows where `{sql}field` is equal to `{sql}'mario'`.
`{sql}=` is equal to
`{sql}<>` is not. ${ \neq }$
`{sql}<` is less than
`{sql}>` is greater than

#### Between

`{sql}WHERE field BETWEEN 10 AND 20`
same as `{sql}field>10 AND field<20`, but it saves you the repetition of `{sql}field`

#### Subqueries

A nested query is used to retrieve a value.
`{sql}WHERE field = (SELECT MAX(field) FROM myTable)`

#### Quantifiers

These keywords iterate conditions over a number of values.

##### Any

**Either** of the values given to this function must result in a truthy comparison
`{sql}WHERE field <comparison> ANY(1, 2, 3)`
is equal to writing
```sql
WHERE field <comparison> 1
OR    field <comparison> 2
OR    field <comparison> 3
```

##### All

**All** of the values given to this function must result in a truthy comparison
`{sql}WHERE field <comparison> ALL(1, 2, 3)`
is equal to writing
```sql
WHERE field <comparison> 1
AND   field <comparison> 2
AND   field <comparison> 3
```

##### Exists

This keyword verifies whether at least one of the passed values is **not** [[#^null]].
`{sql}WHERE EXISTS(35, 40)`
This is **always** true if you write values explicitly. `{sql}35` and `{sql}40` exist, period.
To make it relevant, compute the values you give it through a [[#subqueries|subquery]].

It's the same as saying
```sql
WHERE (35 <> NULL)
OR    (40 <> NULL)
```

## DCL

Stands for **Data Control Language**. Manages which users have access to which data.