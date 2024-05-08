**Russel's Paradox** is a paradox thought of by [[Bertrand Russel|Bertrand Russel]] involving [[set theory]].

It goes something like: "Does the [[set]] of all those sets that do not contain themselves contain itself?"

- [jeffrey kaplan](https://www.youtube.com/watch?v=ymGt7I4Yn3k) ^jeffrey-kaplan
- [stack-exchange](https://hsm.stackexchange.com/a/15662) ^stack-exchange
- [[naive set theory#^wikipedia]] ^naive-set-theory-wikipedia

## Formally

${ Y = \{  x | x \not\in x \} }$
- [[#^naive-set-theory-wikipedia]]

## History

Russel sent a letter to [[Gottlob Frege]] (who had just finished most of his well known books on logic) upon discovering the paradox.
There's a myth about [[Gottlob Frege|Gottlob]] being hospitalized after reading the letter.

- [[#^stack-exchange]]

### Russel's solution

Russel found this paradox in [[Begriffsschrift]], and attempted to fix it in his own book [[Principia Mathematica]]

>[[Principia Mathematica|PM]] sought to avoid this problem by ruling out the unrestricted creation of arbitrary sets. This was achieved by replacing the notion of a general set with notion of a hierarchy of sets of different '[[Type theory|types]]', a set of a certain type only allowed to contain sets of strictly lower types. Contemporary mathematics, however, avoids paradoxes such as Russell's in less unwieldy ways, such as the system of [[ZF|Zermelo–Fraenkel set theory]].
- [[metamathematics#^wikipedia]]

### [[ZFC]]'s solution

In ZFC, ${ x \not\in x, \forall x }$ because of the [[axiom of regularity]].
If sets can't contain themselves then the paradox doesn't happen.

As [[#^jeffrey-kaplan]] pointed out, this is a sneaky solution: _should you really change the rules like that?_