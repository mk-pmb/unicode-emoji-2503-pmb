
<!--#echo json="package.json" key="name" underline="=" -->
unicode-emoji-pmb
=================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
A lookup function for selected Unicode emoji, with some custom additions and
placeholders.
<!--/#echo -->



API
---

This module exports one function:

### unicodeEmoji(name)

Look up an emoji or Unicode symbol by name.
Where available, I usually use the official character name in camel case.
Returns a string if found. Otherwise, throws an error.




<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key="license" -->
ISC
<!--/#echo -->
