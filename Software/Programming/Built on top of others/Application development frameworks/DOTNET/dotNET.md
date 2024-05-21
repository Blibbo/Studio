---
aliases:
  - .NET
  - unified .NET platform
  - .NET Framework
  - .NET Core
---
**.NET** is a software development platform. Here's how it works:
- All .NET software runs on a [[VM|virtual machine]] called [[CLR]].
- This virtual machine executes a [[binary instruction format]] called [[CIL|IL]].
- Three [[programming language|programming languages]] compile to IL
	- [[C-Sharp|C#]]
	- [[F-Sharp|F#]]
	- [[VB.NET]]
- Out of these three, C# is the hyper-popular one and is the only reason why .NET is relevant at all.
- It's "[[Java]] on steroids".
- You can contribute to .NET on [[Github]].

- [Microsoft](https://dotnet.microsoft.com/en-us/) ^microsoft

## History

The platform was made and is developed by [[Microsoft]].
They later made it [[open source|open-source]] and submitted most of it to [[ECMA]] and [[ISO]], which now standardize it.
The language [[F-Sharp|F#]] is the only one not standardized by those two organizations.
Instead, it's governed by the community-driven **F# Software Foundation**.

### Names

It's had different names over the years.

#### First it was called .NET Framework

The **.NET Framework** came out in 2002, it was [[closed-source]] and meant for [[Windows]] only.

#### Then .NET Core and the .NET Framework coexisted

**.NET Core** came out years later as a smaller [[open source]] project.
The goal was to open up to different operating systems.

#### Now it's just called .NET and covers both

.NET Core became huge and started to cover the use cases of the old .NET Framework.
.NET Framework is now the legacy system.
.NET Core was renamed to **.NET 5**. It and its later versions are the new **unified .NET platform**.