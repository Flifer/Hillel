const URL = 'https://62e6b2430e5d74566aeb3d86.mockapi.io/stickers/';

const STICKERS_LIST_CLASS = 'stickers-list'
const STICKER_ITEM_CLASS = 'sticker-item'
const DELETE_BTN_CLASS = 'deleteBtn'
const ADD_STICKER_BTN_CLASS = 'add-sticker'
const TEXTAREA_CLASS = 'sticker-description'

const $stickersList = $(`.${STICKERS_LIST_CLASS}`)
const $addStickerBtn = $(`.${ADD_STICKER_BTN_CLASS}`)

$addStickerBtn.on('click', onAddStickerBtnClick)
$stickersList.on('click', `.${DELETE_BTN_CLASS}`, onDeleteBtnClick)
$stickersList.on('focusout',`.${TEXTAREA_CLASS}` ,onTextareaFocusOut)
$stickersList.on('mouseup',`.${TEXTAREA_CLASS}` ,onTextareaMouseUp)

getStickersList().then(renderStickersList);

function onAddStickerBtnClick() {
    createSticker()
    .then(newSticker => {
        renderStickerItem(newSticker);
    });
}

function onDeleteBtnClick(e) {
    const stickerItem = getStickerItem(e.target);
    const stickerItemId = getStickerItemId($(stickerItem));
    fetch(URL + stickerItemId, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    }).then($(stickerItem).remove())
    return;
}

function onTextareaFocusOut(e) {
    const stickerItem = getStickerItem(e.target);
    const stickerItemId = getStickerItemId($(stickerItem));
    const editedText = getEditedText(stickerItem)
    fetch(URL + stickerItemId, {
        method: 'PUT',
        body: JSON.stringify({description: editedText}),
        headers: {'Content-Type': 'application/json'},
    })
}

function onTextareaMouseUp(e) {
    const stickerItem = getStickerItem(e.target);
    const stickerItemId = getStickerItemId($(stickerItem));
    const editedEl = stickerItem.querySelector(`.${TEXTAREA_CLASS}`);
    const editedWidth = editedEl.clientWidth;
    const editedHeight = editedEl.clientHeight;
    fetch(URL + stickerItemId, {
        method: 'PUT',
        body: JSON.stringify({
            width: editedWidth,
            height: editedHeight
        }),
        headers: {'Content-Type': 'application/json'},
    })
}

function getStickerItem(el) {
    return el.closest(`.${STICKER_ITEM_CLASS}`);
}

function getStickerItemId($stickerItem) {
    return $stickerItem.data('id')
}

function getEditedText(el) {
    const editedEl = el.querySelector(`.${TEXTAREA_CLASS}`)
    return editedEl.value
}

function getStickersList() {
    return fetch(URL).then(res => res.json());
}

function renderStickersList(list) {
    const html = list.map(generateStickerHtml).join('');

    $stickersList.append(html);
}

function renderStickerItem(sticker) {
    const newStickerHtml = generateStickerHtml(sticker);
    $stickersList.append(newStickerHtml);
}

function generateStickerHtml(sticker) {
    return `
        <div data-id ="${sticker.id}" class=${STICKER_ITEM_CLASS}>
            <button class=${DELETE_BTN_CLASS}>X</button>
            <textarea class=${TEXTAREA_CLASS} style="width: ${sticker.width}px; height: ${sticker.height}px;">${sticker.description}</textarea>
        </div>
    `;
}

function createSticker() {
    return fetch(URL, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }

        throw new Error('Can not create new Sticker');
    });
}