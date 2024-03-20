Many compiled [[Programming Language|languages]] modify function names based on their arguments to allow [[Overloading|function overloading]].

Different languages might decide to mangle their function names in different ways, resulting in an additional barrier against interoperability between languages.

I'm saying that when you compile a library and you have symbols for each function, other languages might not be able to use them NOT ONLY because the language's implementation doesn't share the same [[type system]] but also because the symbols themselves don't match.