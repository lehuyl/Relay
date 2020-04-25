import React from 'react';
import { Layout, Row, Col } from 'antd';
import MessageCard from '../Card/MessageCard';

import Chat from '../Chat/Chat';

const { Content } = Layout;


const ContentCard = () => {
    const name: string = 'steven';

    return (
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
    );
};

export default ContentCard;