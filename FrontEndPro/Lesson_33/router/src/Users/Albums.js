import {useParams} from "react-router-dom";
import React, { useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {fetchAlbums} from "../store/actions/users";

export default function Albums() {
    const albums = useSelector(state => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let { userId } = useParams();
    useEffect(() => {
        dispatch(fetchAlbums(userId));
      }, [dispatch, userId]);

    function onPhotosClick(e, album) {
        e.stopPropagation();
        navigate(`/${userId}/albums/${album.id}/photos`)
      }
    return (
        <ul id="albumList">
        {albums.map((album, i) => (
          <li key={album.id} className="album-item">
            <button onClick={e => onPhotosClick(e, album)}>Photos</button>
            {album.title}
          </li>
        ))}
      </ul>
        
    )
}