---
id: explanation
title: How Squirrelly Works
sidebar_label: How Squirrelly Works
---

Unlike many pieces of software, we like our users to understand what their programs are doing behind the scenes.

## TL;DR:
Squirrelly uses Regular Expressions to turn a template into a function which can be called with a specific set of options. Since all of the parsing is done beforehand, the function (called a "Precompiled" function) just does string interpolation and is incredibly fast.

## Long Version:
Squirrelly parses templates in several steps:
1. Separate the template (really just a string) into blocks of helper functions and everything else.

2. Separate each of the non-helper blocks into blocks of global references (i.e. `{{username}}`) and everything else.

3. Separate each of the non-global-reference blocks into helper references (i.e. `{{@myhelpervalue}}`) and strings.

4. Replace each of the partials (i.e. `{{include mypartial}}` or `{{> mypartial}}`) with the actual content of the function at `Sqrl.Partials['partialname'] called with the options.

5. Create a function for each of the blocks in each partial that can be called with the helper values.