export function mediaFactory(data, indexImage) {
    const { id, photographerId, title, video, image, likes, date, price } =
        data;

    const picture = `assets/media/${photographerId}/${image}`;
    const movie = `assets/media/${photographerId}/${video}`;

    const imageExist = 'image' in data;

    function showImage() {
        if (imageExist) {
            const img = document.createElement('img');
            img.setAttribute('src', picture);
            img.setAttribute('alt', `Photo ${image}`);
            img.style.objectFit = 'cover';
            img.addEventListener('click', function () {
                const lightbox = document.getElementById('lightbox');
                lightbox.style.display = 'block';
                lightbox.setAttribute('data-index', indexImage);
                const image = document.getElementById('lightboxImg');
                image.src = picture;
            });
            return img;
        } else {
            const video = document.createElement('video');
            video.setAttribute('id', 'player');
            video.setAttribute('controls', '');
            const source = document.createElement('source');
            source.setAttribute('src', movie);
            source.setAttribute('type', 'video/mp4');
            video.appendChild(source);

            return video;
        }
    }

    function getUserCardDOM() {
        const article = document.createElement('article');
        const obj = showImage();
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.flexDirection = 'row';
        div.style.justifyContent = 'space-between';
        div.style.alignContent = 'center';
        div.style.marginTop = '-30px';
        const h4 = document.createElement('h4');
        h4.textContent = title;
        h4.style.color = '#901C1C';
        h4.style.fontSize = '24px';
        const h5 = document.createElement('h5');
        h5.style.fontSize = '16px';
        h5.style.marginTop = '35px';
        h5.style.fontSize = '16px';
        h5.style.marginTop = '35px';
        h5.style.color = '#911C1C';
        h5.textContent = `${likes} \u2665`;
        h5.setAttribute('onclick', `incrementLike(this.id)`);
        h5.setAttribute('class', 'like');
        h5.setAttribute('id', Math.floor(Math.random() * 100));
        article.appendChild(obj);
        article.appendChild(div);
        div.appendChild(h4);
        div.appendChild(h5);

        return article;
    }
    return {
        id,
        photographerId,
        title,
        image,
        likes,
        date,
        price,
        getUserCardDOM,
    };
}
