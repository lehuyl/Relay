import React from 'react';
import { Layout} from 'antd';

import SideNav from './SideNav/SideNav';
import ContentCard from './ContentCards/ContentCard';
import { Route, Switch } from 'react-router-dom';
import Chat from './Chat/Chat';

const Home = (props) => {
    // const name: string = 'steven';
    // const { name } = props.location.state;
    
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SideNav />

            <Switch>
                <Route path="/home/:roomName" component={Chat} />
            </Switch>

        </Layout>
    );
};
export default Home;
