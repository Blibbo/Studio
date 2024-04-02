---
aliases:
  - Windows Service Control Manager
  - Service Control Manager
---
The **Service Control Manager** is a component of the [[Windows]] operating system that handles [[Service|services]].
It maintains a database of installed services and their status. Services can be registered to start when the system boots up, and I've found things like [[mysqld.exe]] register themselves there upon installation.

You can fully configure services and tell them to stop starting on boot, or disable them entirely.