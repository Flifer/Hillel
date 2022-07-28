const input = document.querySelector('#gitUserLoginInput');
const getUserBtn = document.querySelector('#getUserBtn');
const container = document.querySelector('#container');

getUserBtn.addEventListener('click', onGetUserBtnClick);

function onGetUserBtnClick(e) {
    if (input.value !== '') {
        if (container.children) {
            container.innerHTML = ''
        }
        let url = `https://api.github.com/users/${input.value}`
        fetch(url)
        .then(response => response.json())
        .then(renderInfo)   
        input.value = ''
    }
}

function renderInfo(info) {
    const html = generateInfoHtml(info);

    container.insertAdjacentHTML('beforeend', html);
}

function generateInfoHtml(info) {
    return `
        <li>
            <a href="${info.html_url}" style="display: block; width: 150px; height: 150px; background-image: url(${info.avatar_url}); background-size: cover;"></a>
        </li>
        <li>
           Репозиториев ${info.public_repos} 
        </li>
        <li>
           Фоловеров ${info.followers} 
        </li>
        <li>
           Наблюдаемых ${info.following} 
        </li>
    `;
}