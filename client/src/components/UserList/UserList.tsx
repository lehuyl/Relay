import React from 'react';

import './UserList.scss';

const UserList = ({ users }) => {
    return (
        <div className="list">
            {users.map(user => <p>{user.name}></p>)}
        </div>
    );
}

export default UserList;