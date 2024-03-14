---
tags:
  - software
  - programming
  - tool
---
Containers are like [[Virtual Machine|virtual machines]] but friendlier with the hardware, because they use your resources.
They're composed of a filesystem and some metadata.
Metadata is similar to [[Git#^commits|git commits]].
The **image** of your container is the filesystem with all the changes in the metadata applied to it.

Each container manager has lots of base images. Here are [[Docker#^images|docker's]]

[Introductive video](https://www.youtube.com/watch?v=J0NuOlA2xDc&ab_channel=Coderized)

---

### Container software

```dataview
LIST FROM "Software/Programming/Container management"
where file.path != this.file.path
```