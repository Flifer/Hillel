import UsersApi from "./UsersApi";

export const ACTION_USERS_FETCH_LIST = 'fetchList';
export const ACTION_ALBUM_FETCH_LIST = 'fetchAlbums';
export const ACTION_PHOTOS_FETCH_LIST = 'fetchPhotos'

export function fetchList() {
  return dispatch => {
    UsersApi.getList()
      .then((list) => {
        dispatch({ type: ACTION_USERS_FETCH_LIST, payload: list });
      });
  };
}

export function fetchAlbums(id) {
  return dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
    .then(res => {
      if (res.ok) {
          return res.json();
      }})
    .then((albums) => {
      dispatch({ type: ACTION_ALBUM_FETCH_LIST, payload: albums })
    });
  };
}

export function fetchPhotos(id) {
  return dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    .then(res => {
      if(res.ok) {
        return res.json();
      }
    })
    .then((photos) => {
      dispatch({ type: ACTION_PHOTOS_FETCH_LIST, payload: photos})
    });
  };
}