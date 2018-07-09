---
id: installation
title: Installation
sidebar_label: Installation
---
Squirrelly can be used in the browser or in Node.
## In the Browser
Place this in your `<head>`:
```
<script src="https://unpkg.com/squirrelly@3.0.2/dist/squirrelly.min.js"></script>
```

Now, all of the methods can be accessed through the object `Sqrl`. Try `Sqrl.Precompile("{{hi}}")`.

## In Node
To install, run `npm install squirrelly`. Then, `var Sqrl = require("squirrelly")`.