# LazyTube

> A minimalistic, ultra-lightweight, Vanilla JS library to lazy load youtube players (and make them responsive) without any dependencies.

Usage
-----
- Insert `lazytube.min.css` in your code
- Insert `lazytube.min.js` in your code
- Replace all your `<iframe src="https://www.youtube.com/embed/#ID#">` by `<div class="js-lazytube" data-embed="#ID#"></div>`

This will make a full responsive embed, but you can add a data-width attribute to set a max-width (like the width attribute of the iframe). It works perfectly with multiple videos on the same page.

What does it do?
-----
It makes your website loading faster by preventing all the youtube dependencies to load with the page. When document is ready, it will add the thumbnail and create a play button.
If it is clicked, the youtube libraries will be loaded and the iframe created.

Browser support
-----
I didn't test it everywhere but it should works in modern Chrome/Firefox/Safari.
