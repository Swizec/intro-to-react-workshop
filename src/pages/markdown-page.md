---
title: "This page is markdown"
---

# This page is markdown

All of this was written with markdown.

Some *italics* and some **bolds**. What about `code samples`?

```javascript
// cool if syntax highlighting works

let cool = true;
console.log(cool ? 'bla' : 'nyet')
```

```javascript{4-5}
//I can even highlight
//some lines

const highlight = () => {
    let because = highlighted ? 'important change' : null;
}
```

I think this will do perfectly. Now all I need is the ability to embed
React components right in the page and we're golden.

One of those React in Markdown plugins. I wonder if it exists for
Gatsby 🤔
