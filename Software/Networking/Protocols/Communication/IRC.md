---
tags:
  - community
  - software
  - networking
  - protocol
---
---

### About IRC

- Stands for **Internet Relay Chat**
- Client-Server architecture
- uses port `6667` for plain text communication
- uses port `6697` for [[SSL]]/[[TLS]] communication

---

### Standard commands

- `/join #channel-name`
- `/part #cahnnel-name`
	- leave channel
- `/nick NewNick`
- `/whois username` ^whois
	- info about user called `username`
- `/msg username message text`
- `#channel-name message text`
	- send message in that channel
- `/quit`
	- disconnect from server
- `/mode #channel +o username`
	- set modes for a channel or user
	- in this case you give `username` `operator` status
- `/list`
	- see available channels
- `/topic #channel-name`
	- query channel topic
- `/topic #channel-name topic text`
	- set channel topic
- `/kick #channel-name username`
	- _you know this one I'm sure_
- `/away Going to lunch`
	- set an away message
	- prolly pops up on [[#^whois|/whois]]
- `/away`
	- remove away status

---

### Trivia

- developed in the 80's