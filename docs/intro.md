---
id: intro
title: Your first Squirrelly Template
sidebar_label: Getting Started
---

Place this code in a `script` tag or anywhere in Node.JS:

```
var templateString = "Hi, my favorite template engine is {{engine}}
var templateFunction = Sqrl.Precompile(templateString)
console.log(Sqrl.Render(templateFunction, {engine: "Squirrelly"}))
//You could also do this:
console.log(templateFunction({engine: "Squirrelly"}, Sqrl) //Sqrl.Render just calls this
```
There you have it! You should see a message that says "My favorite template engine is Squirrelly". Since we precompiled our template string, we can call `templateFunction()` with whatever data we like. Speeds are also improved by using precompilation: I can get speeds of up to **20 million ops/sec** when I just call `templateFunction()`