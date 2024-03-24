---
tags:
  - software
  - programming
  - tool
---
---

### About containers

- [intro video](https://www.youtube.com/watch?v=J0NuOlA2xDc&ab_channel=Coderized)
- they're like [[VM]] but friendlier with the hardware (they use your resources)
- they're composed of a filesystem and some metadata that works similarly to how a [[Git#^commits|git commit]] works
- the **image** of your container is the filesystem with all the changes in the metadata applied to it
- lots of base images exist for each container manager, example for [[Docker#^images|docker]]

---

### Container software

```dataview
LIST FROM "Software/Programming/Container management"
where file.path != this.file.path
```