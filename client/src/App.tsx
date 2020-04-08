import React from 'react';
import {Layout, Avatar, Menu, Breadcrumb, Row, Col} from 'antd';
import Title from "antd/lib/typography/Title";
import '../src/App.scss'
import '../src/components/MainBody'
import CardCategory from './components/card/CardCategory'
import MessageCard from './components/card/MessageCard'
import MainBody from '../src/components/MainBody';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

import socketIOClient from 'socket.io-client';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

const App = () => {
    const endpoint = 'http://localhost:3001';
    
    const socket = socketIOClient(endpoint);
    
    return (
        <Router>
            <Route path="/" exact component={Join}/>
            <Route path="/chat" component={Chat} />
        </Router>
    )
};

export default App;
