import React from 'react';

import './UserList.scss';

const UserList = ({ users }) => {
    return (
        <div className="list-container">
            <h3>User List</h3>
            {users.map(user => <p>{user.name}></p>)}
        </div>
    );
}

export default UserList;