---
aliases:
  - MySQL CLI
tags:
  - open-source
---
`mysql.exe` is an [[executable]] that tries to connect to the [[MySQL]] [[Service]] (the one started by [[mysqld.exe]]) upon execution.
If the connection (execution) is successful, it provides a [[CLI]] to query your database.

## Commands

`{bash}mysql` (no options)
- Tries connecting to the MySQL Server assuming:
	- Username is `{bash}'ODBC'`
	- Hostname is `{bash}'localhost'`
	- Port is `{bash}3306`
	- No password (won't ever connect successfully)

`{bash}mysql` +
- `{bash}-u <username>` or `{bash}--user <username>` or `{bash}--user=<username>`
	- Specify username
- `{bash}-p` or `{bash}--password`
	- Will prompt you for a password
- `{bash}--password=<password>`
	- Force insert the password
	- Deemed unsafe (people can read your password as you write it)
- `{bash}--port=<port>` or `{bash}--port <port>`
	- Specify the port the service is being served in (check through [[Windows#^services-msc]])
	- Replace `{bash}<port>` with `{bash}3306` if unsure
- `{bash}<databasename>`
	- Use a specific database right away as you connect.
- `{batch}-t` ^table-formatting
	- Format the result as a table to make it pretty.
	  **Always** use it if you intend to make queries.
- `{bash}-e "select 'a';"`
	- Execute a query and close the CLI.
- `{bash}< path/to/your/script.sql`
	- Execute script and close CLI.

## MySQL CLI Commands

These commands are for when you connected to the CLI already.
Any [[SQL]] query is a valid CLI command.
I'm listing **additional** commands here.

### System

```sql
system <command>;
```
or
```sql
\! <command>;
```

Execute a shell command on your machine while in the MySQL CLI.
Example: `{batch}system cls;` or `{bash}\! cls;`

### Source

```sql
source /path/to/your/script.sql;
```

Execute script while in the CLI without closing it.

### Clear screen

```sql
SELECT REPEAT('\n', 100);
```

This command only works if you use [[#^table-formatting]].
You could use [[#System]] to clear the screen, but then you wouldn't be able to scroll up and see history.

I know it's not very smart and I can see you're disappointed in me