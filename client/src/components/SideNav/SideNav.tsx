import React from 'react';
import { Layout, Menu, Input } from 'antd';

import Chat from '../Chat/Chat';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const SideNav = () => {
    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="1">
                    <Link to={`/testroom`} />1 beain cell
                </Menu.Item>
                <Menu.Item key="2"> some sorority group </Menu.Item>
                <Menu.Item> + Add New Group </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default SideNav;
