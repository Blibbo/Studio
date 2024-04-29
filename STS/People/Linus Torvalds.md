>My name is Linus Torvalds and I am your god.

![[Linus Torvalds flipping you off.webp#invert_B]]

> I have an ego the size of a small planet

**Linus Torvalds** is a key figure in [[FOSS]] development. He made the [[Linux kernel]] and [[Git]].
He's very pragmatic in his stances and acknowledges software must exist both in its proprietary, corporate form and in the [[open source]] form he advocates for.

Torvalds thinks the open source movement sometimes has a weird religious aura around it that drives companies away, making open-source development less sustainable.

## Books

- **Just for Fun - The Story of an Accidental Revolutionary**

## Quotes

He's one of the most quoted people I know of.
He just talks _a lot_ of shit, he's bound to have said some memorable stuff.

[Linus wikiquote entries](https://en.wikiquote.org/wiki/Linus_Torvalds)

> The fact is, there aren't just two sides to any issue, there's almost always a range of responses, and "it depends" is almost always the right answer in any big question. 


### [[Linux]]

>just a hobby, won't be big and professional like [[GNU|gnu]].

### [[open source]]

> I often compare open source to science. To where science took this whole notion of developing ideas in the open and improving on other peoples' ideas and making it into what science is today and the incredible advances that we have had. And I compare that to witchcraft and alchemy, where openness was something you didn't do.

> I think Open Source is the right thing to do the same way I believe science is better than alchemy.

### [[SCO]]

> I allege that SCO is full of it. 

> There are literally several levels of SCO being wrong. And even if we were to live in that alternate universe where SCO would be right, they'd still be wrong.

### [[NVIDIA]]

>Fuck you, NVIDIA
- https://www.youtube.com/watch?v=xPh-5P4XH6o

### [[Emacs]]

> An infinite number of monkeys typing into GNU emacs would never make a good program. 

### [[C++]]

> C++ is in that inconvenient spot where it doesn't help make things simple enough to be truly usable for prototyping or simple GUI programming, and yet isn't the lean system programming language that C is that actively encourages you to use simple and direct constructs.

> C++ is a horrible language. It's made more horrible by the fact that a lot of substandard programmers use it, to the point where it's much much easier to generate total and utter crap with it.

> Quite frankly, even if the choice of C were to do *nothing* but keep the C++ programmers out, that in itself would be a huge reason to use C.

### [[Microsoft]]

> If Microsoft ever does applications for Linux it means I've won.

> Microsoft isn't evil, they just make really crappy operating systems.

#### [[Windows]]

> A computer is like air conditioning - it becomes useless when you open Windows

> When you say, "I wrote a program that crashed Windows," people just stare at you blankly and say, "Hey, I got those with the system, for free." 

---

## Rants

Linus is known for his _direct_ way of speaking.
Honestly I have no clue how he pulls off saying some of the shit he says. It's crazy.
He's a geek god.

### I'm a scheming, conniving bastard

- http://linuxmafia.com/faq/Kernel/linus-im-a-bastard-speech.html

>[http://lists.insecure.org/linux-kernel/2000/Sep/1177.html](http://lists.insecure.org/linux-kernel/2000/Sep/1177.html)
>
Subject: Re: Availability of kdb  
From: Linus Torvalds [(torvalds@transmeta.com)](mailto:(torvalds@transmeta.com))  
Date: Sep 06 2000
>
On Wed, 6 Sep 2000, Tigran Aivazian wrote:
>
>> very nice monologue, thanks. It would be great to know Linus' opinion.  
>> I mean, I knew Linus' opinion of some years' ago but perhaps it  
>> changed? He is a living being and not some set of rules written in  
>> stone so perhaps current stability/highquality of kdb suggests to  
>> Linus that it may be (just maybe) acceptable into official tree?
>
I don't like debuggers. Never have, probably never will. I use gdb all the time, but I tend to use it not as a debugger, but as a disassembler on steroids that you can program.
>
None of the arguments for a kernel debugger has touched me in the least. And trust me, over the years I've heard quite a lot of them. In the end, they tend to boil down to basically:
>
> It would be so much easier to do development, and we'd be able to add new things faster.
>
And quite frankly, I don't care. I don't think kernel development should be "easy". I do not condone single-stepping through code to find the bug. I do not think that extra visibility into the system is  
necessarily a good thing.
>
Apparently, if you follow the arguments, not having a kernel debugger leads to various maladies:
>
>- you crash when something goes wrong, and you fsck, and it takes forever, and you get frustrated.
>- people have given up on Linux kernel programming, because it's too hard and too time-consuming.
>- it takes longer to create new features.
>
>
And nobody has explained to me why these are _bad_ things.
>
To me, it's not a bug, it's a feature. Not only is it documented, but it's _good_, so it obviously cannot be a bug.
>
"Takes longer to create new features" - this one in particular is not a very strong argument for having a debugger. It's not as if lack of features or new code would be a problem for Linux, or, in fact, for the software industry as a whole. Quite the reverse. My biggest job is to say "no" to new features, not trying to find them.
>
Oh. And sure, when things crash and you fsck, and you didn't even get a clue about what went wrong, you get frustrated. Tough. There are two kinds of reactions to that: you start being careful, or you start whining about a kernel debugger.
>
Quite frankly, I'd rather weed out the people who don't start being careful early, rather than late. That sounds callous, and by God, it _is_ callous. But it's not the kind of "if you can't stand the heat, get out the the kitchen" kind of remark that some people take it for. No, it's something much more deeper: I'd rather not work with people who aren't careful. It's Darwinism in software development.
>
It's a cold, callous argument that says that there are two kinds of people, and I'd rather not work with the second kind. Live with it.
>
I'm a bastard. I have absolutely no clue why people can ever think otherwise. Yet they do. People think I'm a nice guy, and the fact is that I'm a scheming, conniving bastard who doesn't care for any hurt feelings or lost hours of work, if it just results in what I consider to be a better system.
>
And I'm not just saying that. I'm really not a very nice person. I can say "I don't care" with a straight face, and really mean it.
>
I happen to believe that not having a kernel debugger forces people to think about their problem on a different level than with a debugger. I think that without a debugger, you don't get into that mindset where you know how it behaves, and then you fix it from there. Without a debugger, you tend to think about problems another way. You want to understand things on a different _level_.
>
It's partly "source vs binary", but it's more than that. It's not that you have to look at the sources (of course you have to - and any good debugger will make that _easy_). It's that you have to look at the level _above_ sources. At the meaning of things. Without a debugger, you basically have to go the next step: understand what the program does. Not just that particular line.
>
And quite frankly, for most of the real problems (as opposed to the stupid bugs - of which there are many, as the latest crap with "truncate()" has shown us) a debugger doesn't much help. And the real problems are what I worry about. The rest is just details. It will get fixed eventually.
>
I do realize that others disagree. And I'm not your Mom. You can use a kernel debugger if you want to, and I won't give you the cold shoulder because you have "sullied" yourself. But I'm not going to help you use one, and I would frankly prefer people not to use kernel debuggers that much. So I don't make it part of the standard distribution, and if the existing debuggers aren't very well known, I won't shed a tear over it.
>
Because I'm a bastard, and proud of it!
>
>Linus

- Found in [this thread](https://news.ycombinator.com/item?id=387074).

### Standards are paper. I use paper to wipe my butt every day.

- https://bugzilla.redhat.com/show_bug.cgi?id=638477#c129

>(In reply to comment #128)
>> 
>> In Adobe's software.
>> 
>> > I'm no great fan of flash but it's an essential part of life on the web these
>> > days and I had thought that the Fedora project had finally put its days of
>> > broken flash support behind it.
>> 
>> Fedora's flash support is fine. Adobe's software is broken.
>
Quite frankly, I find your attitude to be annoying and downright stupid.
>
How hard can it be to understand the following simple sentence:
>
   THE USER DOESN'T CARE.
>
Pushing the blame around doesn't help anybody. The only thing that helps is Fedora being helpful, not being obstinate.
>
Also, the fact is, that from a Q&A standpoint, a memcpy() that "just does the right thing" is simply _better_. Quoting standards is just stupid, when there's two simple choices: "it works" or "it doesn't work because bugs happen".
>
Standards are paper. I use paper to wipe my butt every day. That's how much that paper is worth.
>
Reality is what matters. When glibc changed memcpy, it created problems. Saying "not my problem" is irresponsible when it hurts users. 
>
And pointing fingers at Adobe and blaming them for creating bad software is _doubly_ irresponsible if you are then not willing to set a higher standard for your own project.  And "not my problem" is not a higher standard.
>
So please just fix it.
>
The easy and technically nice solution is to just say "we'll alias memcpy to memmove - good software should never notice, and it helps bad software and a known problem".

- Found on [this hackernews thread](https://news.ycombinator.com/item?id=2372892) about him raging on the lack of debuggers for [[Intel]] processors.

### I'll take real toilet paper over standards any day, because at least that way I won't have splinters and ink up my arse

- https://lkml.org/lkml/2018/6/5/769

>From	Linus Torvalds <>
Date	Tue, 5 Jun 2018 10:30:21 -0700
Subject	Re: [GIT PULL] Device properties framework update for v4.18-rc1
>
On Mon, Jun 4, 2018 at 4:31 AM Rafael J. Wysocki <rafael@kernel.org> wrote:
>>
>>  device property: Get rid of union aliasing
>
Honestly, this looks questionable to me.  
>
I'm not talking about the changes themselves - I can live with them.  
But the _rationale_ is pure and utter garbage, and dangerously so.  
>
The fact is, using a union to do type punning is the traditional AND  
STANDARD way to do type punning in gcc. In fact, it is the  
*documented* way to do it for gcc, when you are a f\*cking moron and  
use "-fstrict-aliasing" and need to undo the braindamage that that  
piece of garbage C standard imposes.  
>
So the commit message that talks about how horrible union aliasing is  
is pushing a story that is simply wrong. Using the standard to push it  
\- the same standard that came up with the completely mis-guided  
aliasing rules - is not a valid argument.  
>
Andy, what is the background for trying to push this idiocy? Don't  
tell me "the C standard is unclear". The C standard is _clearly_ bogus  
shit (see above on strict aliasing rules), and when it is bogus  
garbage, it needs to be explicitly ignored, and it needs per-compiler  
workarounds for braindamage. The exact same situation is true when  
there is some lack of clarity.  
> 
This is why we use -fwrapv, -fno-strict-aliasing etc. The standard  
simply is not *important*, when it is in direct conflict with reality  
and reliable code generation.  
>
The *fact* is that gcc documents type punning through unions as the  
"right way". You may disagree with that, but putting some theoretical  
standards language over the *explicit* and long-time documentation of  
the main compiler we use is pure and utter bullshit.  
>
I've said this before, and I'll say it again: a standards paper is  
just so much toilet paper when it conflicts with reality. It has  
absolutely _zero_ relevance. In fact, I'll take real toilet paper over  
standards any day, because at least that way I won't have splinters  
and ink up my arse.  
>
So I want to see actual real arguments, not "the standard is unclear".  
When documented gcc behavior says one thing, and the standard might be  
unclear, we really don't care one whit about the lack of clarity in  
some standard.  
>
So what's the _real_ reason for avoiding union aliasing?  
>
There are competent people on standards bodies. But they aren't  
_always_ competent, and the translation of intent to English isn't  
always perfect either. So standards are not some kind of holy book  
that has to be revered. Standards too need to be questioned.
>
>                 Linus

- Found on [this reddit thread](https://www.reddit.com/r/cpp_questions/comments/jy3zsh/when_will_the_c_c_standards_formally_recognize/)

---

## Backlinks

```dataview
table from [[linus torvalds]]
```
## Trivia

- Many years ago he founded some finnish retail company with some guys and then stepped out.
  This is their ecommerce website now: https://www.verkkokauppa.com/fi/etusivu

- Linus is a scuba diver and made an app for planning dives.

- Short interview where he talks about his first line of code: https://www.youtube.com/watch?v=S5S9LIT-hdc

- He's not against using [[Rust]] in the Linux Kernel: https://www.youtube.com/watch?v=ZZJUhHlxaYs