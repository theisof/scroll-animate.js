# Scroll-animate.js
*A small JavaScript plugin for triggering animations when elements are scrolled into view*

Scroll-animate.js dynamically adds animation classes to elements as they are scrolled into view. It's originally designed for the [animate.css](https://daneden.github.io/animate.css/) project, but may be used with any framework - or your own custom style-classes for that matter. 

Depends on jQuery.

See a live example: [pandapace.com](https://www.pandapace.com/)

## How it works

First of all include the scroll-animate.js script on your site - after jQuery (and optionally animate.css)

```html
<script src="vendor/jquery.min.js"></script> 
<script src="js/scroll-animate.js"></script>
```

The script is applied through a Bootstrap-inspired data-attributes interface. All you need to do is adding `data-scroll-animate="[animation-class-name]"` to the element, and the rest is taken care of:

```html
<div class="animated" data-scroll-animate="rubberBand">
  Element
</div>
```

If you're using animate.css you'll also need to apply `class="animated"`. In addition, if the element should be hidden as default add `visibility: hidden` to the element.

## Caveats 
Top-offsets are saved on document.ready, therefore, it's advised to add dimensions on images to avoid miscalculations caused by reflow.

## Dependencies

* jQuery (necessary)
* animate.css (optional)
