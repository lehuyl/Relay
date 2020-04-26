import React from 'react';
import { Layout, Menu, Input } from 'antd';

import Chat from '../Chat/Chat';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const SideNav = () => {
    const roomOne: string = '1beaincell';
    const roomTwo: string = 'groupchat';

    const rooms: string[] = [];
    rooms.push(roomOne);
    rooms.push(roomTwo);

    const menuItems = [];
    rooms.forEach((roomName: string) => {
        menuItems.push(
            <Menu.Item key={roomName}>
                <Link
                    to={{
                        pathname: `/home/${roomName}`,
                    }}
                >
                    {roomName}
                </Link>
            </Menu.Item>
        );
    });

    return (
        <Sider width={200} className="site-layout-background">
            <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
                {menuItems}
            </Menu>
        </Sider>
    );
};

export default SideNav;
