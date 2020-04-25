import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import {Layout, Avatar, Menu, Breadcrumb, Row, Col} from 'antd';
import Title from "antd/lib/typography/Title";
import '../src/App.scss'
import '../src/components/MainBody'
import CardCategory from './components/Card/CardCategory'
import MessageCard from './components/Card/MessageCard'
import MainBody from '../src/components/MainBody';

import socketIOClient from 'socket.io-client';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

const App = () => {
    const { Header, Footer, Sider, Content } = Layout;
    const { SubMenu } = Menu;
    const endpoint = 'http://localhost:5000';
    
    const socket = socketIOClient(endpoint);
    
    return (
        // <MainBody></MainBody>
        <Router>
            <Route path="/" exact component={Join}/>
            <Route path="/chat" component={MainBody} />
        </Router>
    )
};

export default App;
