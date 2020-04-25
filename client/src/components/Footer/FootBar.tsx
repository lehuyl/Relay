import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterBar = () => {
    return (
        <Footer
            className="site-layout-background"
            style={{ textAlign: 'center' }}
        >
            {' '}
            ©2020 Created by Martin and Steven
        </Footer>
    );
};

export default FooterBar;