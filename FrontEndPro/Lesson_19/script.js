const URL = 'https://jsonplaceholder.typicode.com/';
const ALBUM_CLASS = 'album'
const ACTIVE_CLASS = 'active'
const IMAGE = 'album-image'

const albumsList = document.querySelector('#albumsList')
const images = document.querySelector('#images')

albumsList.addEventListener('click', onAlbumsListClick)

getAlbumList().then(renderAlbumList)

getAlbum(1).then(renderPhotos);

function onAlbumsListClick(e) {
    e.preventDefault();

    const targetAlbum = getTargetAlbum(e.target)
    const targetAlbumId = getTargetAlbumId(targetAlbum)

    const activeAlbum = findActiveAlbum();

    if (targetAlbum == activeAlbum) { 
        return
    }

    if (activeAlbum && activeAlbum !== targetAlbum) { 
        activeAlbum.classList.remove(ACTIVE_CLASS);
        targetAlbum.classList.add(ACTIVE_CLASS);
        images.innerHTML = '';
        getAlbum(targetAlbumId).then(renderPhotos);
        return
    }

    if (!activeAlbum) {
        images.innerHTML = '';
        getAlbum(targetAlbumId).then(renderPhotos);
        targetAlbum.classList.add(ACTIVE_CLASS);
    }
}

function getAlbumList() {
    return fetch(URL + 'albums').then(res => res.json());
}

function renderAlbumList(list) {
    const html = list.map(generateAlbumHtml).join('');
    albumsList.insertAdjacentHTML('beforeend', html);
}

function generateAlbumHtml(album) {

    return `
        <li data-id ="${album.id}" class = ${ALBUM_CLASS}>
            <span>${album.title}</span>
        </li>
    `;
}

function findActiveAlbum() {
    return albumsList.querySelector(`.${ACTIVE_CLASS}`);
}

function getTargetAlbum(el) {
    return el.closest(`.${ALBUM_CLASS}`)
}

function getTargetAlbumId(el) {
    return el.dataset.id
}

function getAlbum(id) {
    return fetch(URL + `photos?albumId=${id}`).then(res => res.json());
}

function renderPhotos(list) {
    const html = list.map(generatePhotosHtml).join('');
    images.insertAdjacentHTML('beforeend', html);
}

function generatePhotosHtml(image) {
    return `
    <li class = ${IMAGE}>
        <img src="${image.url}" alt="img id = ${image.id}">
    </li>
    `
}