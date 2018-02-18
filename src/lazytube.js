(function (document) {
    'use strict';
    function lazyLoad(element){
        var embed = element.dataset.embed;
        if ('width' in element.dataset) {
            var width = element.dataset.width;
            element.style.maxWidth = width + 'px';
        }
        var button = document.createElement('button');
        var thumbnail = document.createElement('img');
        var iframe = document.createElement('iframe');
        thumbnail.src = 'https://i.ytimg.com/vi/'+ embed +'/hqdefault.jpg'; //'https://img.youtube.com/vi/'+ embed +'/sddefault.jpg';
        https://i.ytimg.com/vi/kGiRWIFX39I/hqdefault.jpg
        thumbnail.addEventListener('load', function() {
            element.appendChild(thumbnail);
            element.appendChild(button);
        }(element));
        element.addEventListener('click', function() {
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('src', 'https://www.youtube.com/embed/'+ embed +'?rel=0&showinfo=0&autoplay=1' );
            element.appendChild(iframe);
            thumbnail.classList.add('fadeout');
            button.remove();
        });
    }

    document.addEventListener('DOMContentLoaded', function(event) {
        var youtube = document.getElementsByClassName('js-lazytube');
        for(var i = 0, length = youtube.length ; i < length; i++) {
            console.log('ok');
            new lazyLoad(youtube[i]);
        }
    });
})(document);
