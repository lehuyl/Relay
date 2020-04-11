import React from 'react';
import {Layout, Avatar, Menu, Breadcrumb } from 'antd';
import Title from "antd/lib/typography/Title";
import '../src/App.scss'
import '../src/components/MainBody'
import MessageCard from './components/MessageCard'

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const App = () => {
  return (
  <div>
   <Layout style={{ minHeight: '100vh', display: 'flex' }}>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">1 beain cell crew</Menu.Item>
        <Menu.Item key="2">lmao xd</Menu.Item>
        <Menu.Item key="3">AΣΣ</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64}}>
      <div className="site-layout-background" style={{ paddingTop: 24 }}>
        <MessageCard />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center'}}> ©2020 Created by Martin and Steven</Footer>
  </Layout>
</div>
  );
};

export default App;
