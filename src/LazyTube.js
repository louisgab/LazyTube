export default class LazyTube {
    static init() {
        let videos = document.querySelectorAll('.js-lazytube');
        if (videos && videos.length > 0) {
            Array.from(videos).forEach(video => {
                new LazyTube(video);
            });
        }
    }

    constructor(video) {
        this.video = video;
        this.embed = this.video.dataset.embed;
        if ('width' in this.video.dataset) {
            this.video.style.maxWidth = this.video.dataset.width + 'px';
        }
        this.createPlaceholder();
        this.video.addEventListener('click', () => {
            this.loadIframe();
            this.thumbnail.classList.add('fadeout');
            this.button.remove();
        });
    }

    createPlaceholder() {
        this.button = document.createElement('button');
        this.thumbnail = document.createElement('img');
        this.thumbnail.src = 'https://i.ytimg.com/vi/' + this.embed + '/hqdefault.jpg';
        this.thumbnail.addEventListener('load', () => {
            this.video.appendChild(this.thumbnail);
            this.video.appendChild(this.button);
        });
    }

    loadIframe() {
        this.iframe = document.createElement('iframe');
        this.iframe.setAttribute('frameborder', '0');
        this.iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
        this.iframe.setAttribute('allowfullscreen', '');
        this.iframe.setAttribute('src', 'https://www.youtube.com/embed/' + this.embed);
        this.video.appendChild(this.iframe);
    }
}
