import './App.css';
import React, { useState } from 'react';

import Layout from 'antd/es/layout';
import Title from 'antd/lib/typography/Title';


import LeftMenu from './components/LeftMenu';
import Body from './components/Body';

const { Header, Footer, Sider, Content } = Layout;




function App() {

  const [menuState, setMenuState] = useState(0);
  
  return (
    <div className="App">
      <Layout>
        <Header><Title style={{color:"white"}} level={2}>Function Plots</Title></Header>
        <Layout>
          <Sider><LeftMenu handleClick={(key) => setMenuState(key)}/></Sider>
          <Layout>
            <Content><Body/></Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
