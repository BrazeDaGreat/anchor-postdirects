# Anchor Postdirects

A little extension on the existing anchor tags in HTML.

It allows you to open a link in new tab, while redirecting the current page afterwards. Also works for in-app browsers such as Instagram's.

## Usage

Add this to your `<head>`:

```html
<script src="anchor-postdirects.js"></script>
```

And then have a `postdirect` attribute (this is the link your current page would redirect to).

```html
<a href="https://www.google.com" postdirect="https://www.facebook.com"
  >Click Me</a
>
```
