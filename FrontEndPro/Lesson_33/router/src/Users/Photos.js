import {useParams} from "react-router-dom";
import React, { useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPhotos} from "../store/actions/users";

import styles from "../Users/photos.module.css"

export default function Photos() {
    const photos = useSelector(state => state.users);
    const dispatch = useDispatch();
    let { albumId } = useParams();
    useEffect(() => {
        dispatch(fetchPhotos(albumId));
      }, [dispatch]);
    return (
        <ul id="photosList" className={styles.list}>
        {photos.map((photo, i) => (
          <li key={photo.id} className="album-item">
            <img src={photo.url} alt="placeholder" className= {styles.albumImage}></img>
          </li>
        ))}
      </ul>
    )
}