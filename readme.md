Animations are referenced from [asika32764/vue2-animate](https://github.com/asika32764/vue2-animate).
- If it doesn't look like an animation is working (especially the ones with changing x/y coordinates), it's probably because your element is locked down with fixed positioning or something.

Vue doesn't recognize `textContent` changes for animations, so you need to bind a dom attribute to make it recognize those, `:key` is a special attribute exactly for that.

```html
<span :key='info.p1_name'></span>
```

Vue supports a number of different syntaxes for data binding, but many only render plaintext.  
In order to render html (with `<t>`) need to use `v-html`, though I'm told triple mustache (`{{{ }}}`) works too?

```html
<span :key='info.p1_name' v-html='info.p1_name'></span>
```
