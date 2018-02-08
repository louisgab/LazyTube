# LazyTube

> A simple, ultra-lightweight, Vanilla JS library to lazy load youtube players (and make them responsive)

Usage
-----

- Insert `lazytube.min.css` in your code
- Insert `lazytube.min.js` in your code
- Replace all your `<iframe src="https://www.youtube.com/embed/#ID#">` with `<div class="youtube" data-embed="#ID#"></div>`

This will make a full responsive embed, but you can add a data-width attribute to set a max-width (like the width attribute of the iframe). It works perfectly with multiple videos on the same page.

What does it do?
-----
It makes your website by loading faster by preventing all the youtube dependencies to load with the page. When document is ready, it will add the thumbnail and create a button.
If it is clicked, the youtube libraries will be loaded and the iframe created.

Browser support
-----
I don't tested it everywhere but it should works in Chrome/Firefox/Safari and IE>=11.
