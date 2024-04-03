---
aliases:
  - MySQL Shell
---
[[MySQL]] [[DBA]] [[CLI]] tool.
This [[Executable]] causes the [[shell]] to open.

## Material

[Official tutorial](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-getting-started.html)
[Reference](https://dev.mysql.com/doc/refman/8.3/en/mysql-shell-tutorial-javascript-shell.html)
[San Jose University tutorial](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.cs.sjsu.edu/~mak/tutorials/MySQLShell.pdf&ved=2ahUKEwj3u6T2kpmFAxXthv0HHfEvBNQQFnoECBcQAQ&usg=AOvVaw0P-Tnnst3nwNdkblAN4cVw)

## Command-line execution options

Starting this executable from the command line allows you to give it options.

`{bash}mysqlsh` (no options)
- Starts the shell.

`{bash}mysqlsh`
- `{bash}--uri=mysql://username:password@hostname:port`
	- Connect immediately upon starting the shell
- `{bash}--js`
	- Start in [[#JavaScript mode]]. It's already the default though

## Commands

### Connect

This command allows you to connect to a MySQL server.
```perl
\connect username@hostname:port
```

Example: `{perl}\connect root@localhost:3306`

### SQL mode

`{batch}\sql` enters SQL mode.
You can write SQL queries after writing this command.

### [[JavaScript]] mode

`{batch}\js` enters JavaScript mode.
In this mode, you can query your DB through a [[JavaScript]] [[API]] instead of [[SQL]].

#### Connect with js

Connection command with the javascript mode
```javascript
dba.connect('username@hostname:port', 'password')
```

### Info commands

#### `\help` `\?`

```
The Shell Help is organized in categories and topics. To get help for a
specific category or topic use: \? <pattern>

The <pattern> argument should be the name of a category or a topic.

The pattern is a filter to identify topics for which help is required, it can
use the following wildcards:

- ? matches any single character.
- * matches any character sequence.

The following are the main help categories:

 - AdminAPI       The AdminAPI is an API that enables configuring and managing
                  InnoDB Clusters, ReplicaSets, ClusterSets, among other
                  things.
 - Shell Commands Provides details about the available built-in shell commands.
 - ShellAPI       Contains information about the shell and util global objects
                  as well as the mysql module that enables executing SQL on
                  MySQL Servers.
 - SQL Syntax     Entry point to retrieve syntax help on SQL statements.
 - X DevAPI       Details the mysqlx module as well as the capabilities of the
                  X DevAPI which enable working with MySQL as a Document Store

The available topics include:

- The dba global object and the classes available at the AdminAPI.
- The mysqlx module and the classes available at the X DevAPI.
- The mysql module and the global objects and classes available at the
  ShellAPI.
- The functions and properties of the classes exposed by the APIs.
- The available shell commands.
- Any word that is part of an SQL statement.
- Command Line - invoking built-in shell functions without entering interactive
  mode.

SHELL COMMANDS

The shell commands allow executing specific operations including updating the
shell configuration.

The following shell commands are available:

 - \                   Start multi-line input when in SQL mode.
 - \connect    (\c)    Connects the shell to a MySQL server and assigns the
                       global session.
 - \disconnect         Disconnects the global session.
 - \edit       (\e)    Launch a system editor to edit a command to be executed.
 - \exit               Exits the MySQL Shell, same as \quit.
 - \help       (\?,\h) Prints help information about a specific topic.
 - \history            View and edit command line history.
 - \js                 Switches to JavaScript processing mode.
 - \nopager            Disables the current pager.
 - \nowarnings (\w)    Don't show warnings after every statement.
 - \option             Allows working with the available shell options.
 - \pager      (\P)    Sets the current pager.
 - \py                 Switches to Python processing mode.
 - \quit       (\q)    Exits the MySQL Shell.
 - \reconnect          Reconnects the global session.
 - \rehash             Refresh the autocompletion cache.
 - \show               Executes the given report with provided options and
                       arguments.
 - \source     (\.)    Loads and executes a script from a file.
 - \sql                Executes SQL statement or switches to SQL processing
                       mode when no statement is given.
 - \status     (\s)    Print information about the current global session.
 - \system     (\!)    Execute a system shell command.
 - \use        (\u)    Sets the active schema.
 - \warnings   (\W)    Show warnings after every statement.
 - \watch              Executes the given report with provided options and
                       arguments in a loop.

GLOBAL OBJECTS

The following modules and objects are ready for use when the shell starts:

 - dba     Used for InnoDB Cluster, ReplicaSet, and ClusterSet administration.
 - mysql   Support for connecting to MySQL servers using the classic MySQL
           protocol.
 - mysqlx  Used to work with X Protocol sessions using the MySQL X DevAPI.
 - os      Gives access to functions which allow to interact with the operating
           system.
 - plugins Plugin to manage MySQL Shell plugins
 - shell   Gives access to general purpose functions and properties.
 - sys     Gives access to system specific parameters.
 - util    Global object that groups miscellaneous tools like upgrade checker
           and JSON import.

For additional information on these global objects use: <object>.help()

EXAMPLES
\? AdminAPI
      Displays information about the AdminAPI.

\? \connect
      Displays usage details for the \connect command.

\? checkInstanceConfiguration
      Displays usage details for the dba.checkInstanceConfiguration function.

\? sql syntax
      Displays the main SQL help categories.
```

---

#### `\? AdminAPI`

```
The AdminAPI can be used interactively from the MySQL Shell prompt and
non-interactively from JavaScript and Python scripts and directly from the
command line.

For more information about the dba object use: \? dba

In the AdminAPI, an InnoDB Cluster is represented as an instance of the Cluster
class, while ReplicaSets are represented as an instance of the ReplicaSet
class, and ClusterSets are represented as an instance of the ClusterSet class.

For more information about the Cluster class use: \? Cluster

For more information about the ClusterSet class use: \? ClusterSet

For more information about the ReplicaSet class use: \? ReplicaSet

Scripting

Through the JavaScript and Python bindings of the MySQL Shell, the AdminAPI can
be used from scripts, which can in turn be used interactively or
non-interactively. To execute a script, use the -f command line option,
followed by the script file path. Options that follow the path are passed
directly to the script being executed, which can access them from sys.argv
    mysqlsh root@localhost -f myscript.py arg1 arg2

If the script finishes successfully, the Shell will exit with code 0, while
uncaught exceptions/errors cause it to exist with a non-0 code.

By default, the AdminAPI enables interactivity, which will cause functions to
prompt for missing passwords, confirmations and bits of information that cannot
be obtained automatically.

Prompts can be completely disabled with the --no-wizard command line option or
using the "interactive" boolean option available in some of functions. If
interactivity is disabled and some information is missing (e.g. a password), an
error will be raised instead of being prompted.

Secure Password Handling

Passwords can be safely stored locally, using the system's native secrets
storage functionality (or login-paths in Linux). Whenever the Shell needs a
password, it will first query for the password in the system, before prompting
for it.

Passwords can be stored during interactive use, by confirming in the Store
Password prompt. They can also be stored programmatically, using the
shell.storeCredential() function.

You can also use environment variables to pass information to your scripts. In
JavaScript, the os.getenv() function can be used to access them.

Command Line Interface

In addition to the scripting interface, the MySQL Shell supports generic
command line integration, which allows calling AdminAPI functions directly from
the system shell (e.g. bash). Examples:
    $ mysqlsh -- dba configure-instance root@localhost

    is equivalent to:

    > dba.configureInstance("root@localhost")

    $ mysqlsh root@localhost -- cluster status --extended

    is equivalent to:

    > dba.getCluster().status({extended:true})

The mapping from AdminAPI function signatures works as follows:

- The first argument after a -- can be a shell global object, such as dba. As a
  special case, cluster and rs are also accepted.
- The second argument is the name of the function of the object to be called.
  The naming convention is automatically converted from camelCase/snake_case to
  lower case separated by dashes.
- The rest of the arguments are used in the same order as their JS/Python
  counterparts. Instances can be given as URIs. Option dictionaries can be
  passed as --options, where the option name is the same as in JS/Python.

OBJECTS
 - dba InnoDB Cluster, ReplicaSet, and ClusterSet management functions.

CLASSES
 - Cluster    Represents an InnoDB Cluster.
 - ClusterSet Represents an InnoDB ClusterSet.
 - ReplicaSet Represents an InnoDB ReplicaSet.
```

---

#### `\? ShellAPI`

```
Contains information about the shell and util global objects as well as the
mysql module that enables executing SQL on MySQL Servers.

OBJECTS
 - os    Gives access to functions which allow to interact with the operating
         system.
 - shell Gives access to general purpose functions and properties.
 - sys   Gives access to system specific parameters.
 - util  Global object that groups miscellaneous tools like upgrade checker and
         JSON import.

FUNCTIONS
      dir(object)
            Returns a list of enumerable properties on the target object.

      require(module_name_or_path)
            Loads the specified JavaScript module.

CLASSES
 - Column Represents the metadata for a column in a result.
 - Row    Represents the a Row in a Result.

MODULES
 - mysql Encloses the functions and classes available to interact with a MySQL
         Server using the traditional MySQL Protocol.
```

##### `\? os`

```
      getcwd()
            Retrieves the absolute path of the current working directory.

      getenv(name)
            Retrieves the value of the specified environment variable.

      help([member])
            Provides help about this object and it's members

      loadTextFile(path)
            Reads the contents of a text file.

      sleep(seconds)
            Stops the execution for the given number of seconds.
```

##### `\? os.path`

```
NAME
      path - Gives access to path-related functions.

SYNTAX
      os.path

DESCRIPTION
      Gives access to path-related functions.

FUNCTIONS
      basename(path)
            Provides the base name from the given path, by stripping the
            components before the last path-separator character.

      dirname(path)
            Provides the directory name from the given path, by stripping the
            component after the last path-separator character.

      help([member])
            Provides help about this object and it's members

      isabs(path)
            Checks if the given path is absolute.

      isdir(path)
            Checks if the given path exists and is a directory.

      isfile(path)
            Checks if the given path exists and is a file.

      join(pathA, pathB[, pathC][, pathD])
            Joins the path components using the path-separator character.

      normpath(path)
            Normalizes the given path, collapsing redundant path-separator
            characters and relative references.
```

---

##### `\? sys.path`

```
NAME
      path - Lists the search paths to load the JavaScript modules.

SYNTAX
      sys.path

DESCRIPTION
      When the shell is launched, this variable is initialized to

      - the home folder of shell + "share/mysqlsh/modules/js",
      - the folder specified in the MYSQLSH_JS_MODULE_PATH environment variable
        (multiple folders are allowed, separated with semicolon).

      Users may change the sys.path variable at run-time.

      If sys.path contains a relative path, its absolute path is resolved as a
      relative to the current working directory.
```

---

#### `\? SQL Syntax`

`SQL help requires the Shell to be connected to a MySQL server.`

```
Found several entries matching sql syntax

The following topics were found at the SQL Syntax category:

- Account Management
- Administration
- Components
- Compound Statements
- Contents
- Data Definition
- Data Manipulation
- Data Types
- Functions
- Geographic Features
- Help Metadata
- Language Structure
- Loadable Functions
- Plugins
- Prepared Statements
- Replication Statements
- Storage Engines
- Table Maintenance
- Transactions
- Utility

For help on a specific topic use: \? <topic>

e.g.: \? Account Management
```

---

#### `\? X DevAPI`

```
The X DevAPI allows working with MySQL databases through a modern and fluent
API. It specially simplifies using MySQL as a Document Store.

The variety of operations available through this API includes:

- Creation of a session to an X Protocol enabled MySQL Server.
- Schema management.
- Collection management.
- CRUD operations on Collections and Tables.

The X DevAPI is a collection of functions and classes contained on the mysqlx
module which is automatically loaded when the shell starts.

To work on a MySQL Server with the X DevAPI, start by creating a session using:
mysqlx.getSession(...).

For more details about the mysqlx module use: \? mysqlx

For more details about how to create a session with the X DevAPI use: \?
mysqlx.getSession
```

---

#### `\? \connect`

```
NAME
      \connect - Connects the shell to a MySQL server and assigns the global
      session.

SYNTAX
      \connect [<TYPE>] <URI>
      \c [<TYPE>] <URI>

DESCRIPTION
      TYPE is an optional parameter to specify the session type. Accepts the
      following values:

      - --mc, --mysql: create a classic MySQL protocol session (default port
        3306)
      - --mx, --mysqlx: create an X protocol session (default port 33060)
      - --ssh <SSHURI>: create an SSH tunnel to use as a gateway for db
        connection. This requires that db port is specified in advance.

      If TYPE is omitted, automatic protocol detection is done, unless the
      protocol is given in the URI.

      URI and SSHURI format is: [user[:password]@]hostname[:port]

EXAMPLE
      \connect --mx root@localhost
            Creates a global session using the X protocol to the indicated URI.
```

---