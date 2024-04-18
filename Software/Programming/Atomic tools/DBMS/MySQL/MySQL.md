---
aliases:
  - MySQL Server
---
Powerful [[DBMS#RDBMS|RDBMS]] [[Software]] released under the [[GPL]].

It runs on your machine as a service or [[Daemon]].
To start the service, use the [[mysqld.exe]] utility.

People interact with this server through [[CLI|CLIs]], [[GUI|GUIs]] or programming language [[API|APIs]].
The main CLI utility is [[mysql.exe]], and other methods of interaction leverage it.

## Installation

[Download the Installer](https://dev.mysql.com/downloads/installer/)

## Storage

[[DB#Schema|Schemas]] are stored in `.frm` files.
Data and indexes are stored together in `.ibd` files, each of which correspond to tablespaces for [[InnoDB]] tables.

## Configuration

A `db.opt` file is stored in the same directory as the database tables' data and it contains database info in plain text in `key=value` pairs. Applies to the entirety of the DB Schema

## Trivia

MySQL was created by [[MySQL AB]] and published under the [[GPL]].
Michael Widenius, the creator, named this DBMS after his daughter who is literally called "**My**".

[[Oracle]] now owns the MySQL trademark and copyrights, but the GPL still protects the product.