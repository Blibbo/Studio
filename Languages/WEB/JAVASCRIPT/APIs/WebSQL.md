**WebSQL** is a deprecated [[API]] for [[JavaScript]] that lets the language interact with a built in [[DBMS]] within the [[Browser]].
Each browser had to implement its own DBMS just for this to work.

It was part of the ES standard, I think.
It was just moronic and it died (as it should)

It still works on [[Node.js]]

## Connection

Script by [[blackbox ai]]. I can't bother to check if it works, I'm just picking up random shit here and pasting it in my notes.
```js
var openDatabase = require('websql');

// Open a database called "mydb" with version 1.0 and a description
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

// Create a table called "CLASS" with columns "id" and "class"
db.transaction(function (tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS CLASS (id unique, class)');
});

// Insert two rows into the "CLASS" table
db.transaction(function (tx) {
  tx.executeSql('INSERT INTO CLASS (id, class) VALUES (1, "First")');
  tx.executeSql('INSERT INTO CLASS (id, class) VALUES (2, "Second")');
});

// Query the "CLASS" table and log the results
db.transaction(function (tx) {
  tx.executeSql('SELECT * FROM CLASS', [], function (tx, results) {
    console.log('Found rows: ' + results.rows.length);
    for (var i = 0; i < results.rows.length; i++) {
      console.log('Row ' + i + ': ' + results.rows.item(i).class);
    }
  });
});
```