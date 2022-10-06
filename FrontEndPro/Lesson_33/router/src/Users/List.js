import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {fetchList} from "../store/actions/users";

export default function List() {
    const users = useSelector(state => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchList());
      }, [dispatch])
    
    function onAlbumsClick(e, user) {
      e.stopPropagation();
      navigate(`/${user.id}/albums`)
    }

    return (
        <ul id="userList">
        {users.map((user, i) => (
          <li key={user.id} className="user-item">
            <button onClick={e => onAlbumsClick(e, user)}>Albums</button>
            {user.name}
          </li>
        ))}
      </ul>
    )
} 