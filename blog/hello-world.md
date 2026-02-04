---
title: Hello World
filename: hello-world.md
date: May 4, 2025
description:
---

Your first blog post.

A bunch of markdown components:

## Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

## Text Formatting

This is **bold text** and this is __also bold__.

This is *italic text* and this is _also italic_.

This is ***bold and italic*** text.

This is ~~strikethrough~~ text.

## Lists

### Unordered List

- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
    - Deeply nested item
- Item 3

### Ordered List

1. First item
2. Second item
   1. Nested item 2.1
   2. Nested item 2.2
3. Third item

### Task List

- [x] Completed task
- [ ] Incomplete task
- [ ] Another task to do

## Links and Images

[This is a link](https://github.com)

[Link with title](https://github.com "GitHub Homepage")

## Blockquotes

> This is a blockquote.
> It can span multiple lines.
>
> > This is a nested blockquote.

## Code

Inline code: `const greeting = "Hello World";`

### Code Block

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
  return `Welcome to my blog`;
}

greet("World");
```

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
```

```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "John Doe",
  age: 30,
  email: "john@example.com"
};
```

## Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1 Col 1 | Row 1 Col 2 | Row 1 Col 3 |
| Row 2 Col 1 | Row 2 Col 2 | Row 2 Col 3 |
| Row 3 Col 1 | Row 3 Col 2 | Row 3 Col 3 |

### Aligned Tables

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Left         | Center         | Right         |
| Text         | Text           | Text          |

## Horizontal Rule

---

## Math (KaTeX)

Inline math: $E = mc^2$

Block math:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$

## HTML Elements

You can also use <mark>HTML elements</mark> within markdown.

<details>
<summary>Click to expand</summary>

This is hidden content that can be revealed.

</details>

## Escaped Characters

You can escape special characters: \* \_ \# \[ \] \( \)

## Automatic Links

https://github.com

## Footnotes

Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.

## Emphasis Combinations

**_Bold and italic_**

**Bold with `inline code`**

*Italic with [a link](https://example.com)*

