import './App.css';
import React, { useState } from 'react';

import Layout from 'antd/es/layout';
import Title from 'antd/lib/typography/Title';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import Breadcrumb from 'antd/lib/breadcrumb';
import Distribution from './components/Distribution';

import LeftMenu from './components/LeftMenu';

const { Header, Footer, Sider, Content } = Layout;


function Main(){
  return(
    <div style={{background:"#fff", padding:25, minHeight:500}}>
    <Breadcrumb>
      <BreadcrumbItem>
        <Distribution name={"NAME"}/>
      </BreadcrumbItem>
    </Breadcrumb>
    </div>
  )
}

function App() {

  const [menuState, setMenuState] = useState(0);
  
  return (
    <div className="App">
      <Layout>
        <Header><Title style={{color:"white"}} level={2}>Function Plots</Title></Header>
        <Layout>
          <Sider><LeftMenu handleClick={(key) => setMenuState(key)}/></Sider>
          <Layout>
            <Content><Main/></Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
