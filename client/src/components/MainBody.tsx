import React from 'react';
import { Layout, Avatar, Menu, Breadcrumb, Row, Col, Input } from 'antd';
import Title from 'antd/lib/typography/Title';
import CardCategory from './Card/CardCategory';
import MessageCard from './Card/MessageCard';
import SearchBar from './Header/SearchBar';
import Profile from './Header/Profile';

import Chat from './Chat/Chat';
import { Link } from 'react-router-dom';
import HeaderBar from './Header/Header';
import FooterBar from './Footer/FootBar';
import SideNav from './SideNav/SideNav';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

const MainBody = () => {
    const name: string = 'steven';

    const selectedRoomName = () => {

    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <HeaderBar />
            <Layout>
                <SideNav />
                <Content
                    className="site-layout-background"
                    style={{ padding: '0 50px' }}
                >
                    <div style={{ paddingTop: 24 }}>
                        <Row>
                            <Col span={6}>
                                <MessageCard />{' '}
                            </Col>
                            <Col span={6}>
                                <MessageCard />{' '}
                            </Col>
                            <Col span={6}>
                                <MessageCard />{' '}
                            </Col>
                            <Col span={6}>
                                <MessageCard />{' '}
                            </Col>
                        </Row>
                    </div>
                    <Chat authentication={name} />
                </Content>
                
            </Layout>
            <FooterBar />
        </Layout>
    );
};
export default MainBody;
