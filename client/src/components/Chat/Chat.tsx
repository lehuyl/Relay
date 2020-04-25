import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import UserList from '../UserList/UserList';

import './Chat.scss';

let socket;

const Chat = ({ authentication }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const ENDPOINT = 'localhost:5000'
    
    // console.log(location);
    useEffect(() => {
        const tempRoom = '1 beain cell';
        socket = io(ENDPOINT);
        setName(name as string);
        setRoom(tempRoom as string);

        socket.emit('join', { name, room }, () =>  { 

        });

         return () => {
             socket.emit('disconnect');

             socket.off();
         };

    }, );
    // }, [ENDPOINT, room]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    useEffect(() => {
        socket.on('roomData', (users) => {
            setUsers([users]);
        })
    }, [users]);


    return (
        <div className="outerContainer">
            <div className="container">
                {/* {/* <InfoBar room={room} /> */}
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} /> 
            </div>

            {/* <UserList users={users} /> */}
        </div>
    );
}

export default Chat;