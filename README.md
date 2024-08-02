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

You can also optionally have an `after` attribute, i.e after how many milliseconds does the postdirect happens.

```html
<a href="buy.html" postdirect="offers.html" after="500">Shop</a>
```

`after` is defaulted to `1000ms` in case not provided, modify line `27` if you want to change the default value.

### Known Issues

- If you actually return back from the postdirect, it redirects you again due to sessionStorage. This was meant as a fix for in-app browsers but causes consequences for desktop users, still thinking for a fix.
