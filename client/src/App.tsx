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

const App = () => {
  return (
  <div>
    <MainBody />
  </div>
  );
};

export default App;
