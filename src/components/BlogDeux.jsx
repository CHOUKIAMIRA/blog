import React, { useEffect } from 'react';
import { getusers } from '../redux/action/actionUser';
import { useDispatch, useSelector } from 'react-redux';

function BlogDeux({ searchContact }) {
  const dispatch = useDispatch();
  const users = useSelector(state => state.allusers.users);

  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);

  const filteredUsers = users && searchContact
    ? users.filter(user => user.name.toLowerCase().includes(searchContact.toLowerCase()))
    : users;

  return (
    <div style={{ backgroundColor: "white", padding: "10px", margin: "20px 20px 20px 0", borderRadius: "10px", color: "#855c72" }}>
      Contact
      <hr />
      <div>
        {filteredUsers && filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <div key={user.id || index} style={{ display: "flex", alignItems: "center", margin: "20px" }}>
              <div style={{ width: "30px", height: "30px", borderRadius: "50%", overflow: "hidden" }}>
                <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={user.image} alt="profile" />
              </div>
              <div style={{ color: "#855c72", marginLeft: "10px" }}>{user.name}</div>
            </div>
          ))
        ) : (
          <div>Aucun utilisateur trouvé</div>
        )}
      </div>
    </div>
  );
}

export default BlogDeux;
