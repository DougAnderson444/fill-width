# Svelte Fill Width

Use to fill the width of an HTML Element. No matter what size the font is, it will always fill the width of the given container.

## Use

Use as a:

1. Javascript function
2. Svelte Directive
3. Svelte Component

```bash
<div>A big container
    <div use:fillWidth={{ width: number, fontSize: number }}>Some short text</div>
</div>
```
