import React from 'react';
import {Layout, Avatar, Menu, Breadcrumb, Row, Col, Input} from 'antd';
import Title from "antd/lib/typography/Title";
import CardCategory from './card/CardCategory'
import MessageCard from './card/MessageCard'
import SearchBar from './header/SearchBar'
import Profile from './header/Profile'

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

const MainBody = () => {
    return (
      <Layout style={{minHeight: '100vh'}}>
         <Header id = "header" style={{ zIndex: 1, width: '100%' }}>
          <Row>
           <Col span ={3}> Relay </ Col>
           <Col span = {20} > <SearchBar /> </Col>
    <Col span = {1} > <Profile /> </Col>
           </Row>
         </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
           <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }} >
             <Menu.Item key = "1" > 1 beain cell </Menu.Item>
             <Menu.Item> some sorority group </Menu.Item>
             <Menu.Item> + Add New Group </Menu.Item>
            </Menu>
        </Sider> 
        <Content className="site-layout-background" style={{ padding: '0 50px'}}>
           <div style={{ paddingTop: 24 }}>
           <Row>
               <Col span={6}><MessageCard /> </Col>
               <Col span={6}><MessageCard /> </Col>
               <Col span={6}><MessageCard /> </Col>
               <Col span={6}><MessageCard /> </Col>
           </Row>
           </div>
        </Content>
      </Layout>
         <Footer className="site-layout-background" style={{ textAlign: 'center'}}> ©2020 Created by Martin and Steven</Footer>
    </Layout>
    )
}
export default MainBody