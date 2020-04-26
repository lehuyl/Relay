const users = [];

const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    // console.log('yeet', name);
    const existingUser = users.find((user) => user.room === room && user.name === name);

    if(existingUser) {
        return { error: 'Username is taken' };
    }

    const user = { id, name, room };

    users.push(user);

    return { user: user };
}

const removeUser = (id: number) => {
    const index = users.find(user => user.id === id);

    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
 }

const getUser = (id: number) => {
    return users.find(user => user.id === id);
}

const getUsersInRoom = (room: string) => {
    return users.filter(user => user.room === room);
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom };