import React from 'react';
import {Layout, Avatar, Menu, Carousel, Radio } from 'antd';
import Title from "antd/lib/typography/Title";
import '../src/App.scss'

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;




const App = () => {
  return (
  <div>
    <Layout>
      <Sider className="site-layout-sider">
      <Menu theme="dark">
          <Menu.Item>
            Group 1
         </Menu.Item>
        </Menu>
      </Sider>
     <Layout>
      <Header style={{padding:10}}>
      <Avatar style={{float: 'right'}} icon="user"/>
      <Title style={{color: 'white'}} level={3}> Relay </Title>
    </Header>
      <Content>
        <div className="site-layout-content"> Content </div>
        </Content>
      <Footer style={{textAlign: 'center'}}> 
      xd lmao ©2020 Created by Steven and Martin
      </Footer>
  </Layout>
  </Layout>
</div>
  );
};

export default App;
