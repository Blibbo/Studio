**Aftman** is a package manager for programming [[Roblox]] games
It's meant to be used with another tool called [[Rojo]].

- [GitHub](https://github.com/LPGhatguy/aftman) ^github
- [[Rojo#^rojo]]
- [GitHub Releases Page](https://github.com/LPGhatguy/aftman/releases) ^github-releases

## Command-line execution

`{bash}aftman` (no options)
- Tells you the version of the program

`{bash}aftman` +
- `{bash}--help`
	- Detailed help on subcommands
- `{bash}self-install`
	- Updates the program
- `{bash}init [path]`
	- Creates `aftman.toml` in your current directory by default, or in the specifed path
- `{bash}add rojo-rbx/rojo`
	- Add a tool in the `aftman.toml` file
- `{bash}add rojo-rbx/rojo@6.2.0`
	- Add a specific version of the tool to the `aftman.toml` file
- `{bash}install`
	- Install everything listed in `aftman.toml`