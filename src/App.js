import './App.css';
import React, { useState } from 'react';

import Layout from 'antd/es/layout';
import Title from 'antd/lib/typography/Title';


import LeftMenu from './components/LeftMenu';
import Body from './components/Body';

import Uniforme from './Distributions/Uniforme';
import Normal from './Distributions/Normal';


const { Header, Footer, Sider, Content } = Layout;




function App() {

  const [menuState, setMenuState] = useState(0);
  
  const renderFromMenu = () => {
    let key = menuState.key;

    console.log(key);
    if(key === "uniforme")
      return <Uniforme a={2} b={3}/>;
    else if (key === "normal")
      return <Normal mu={1} sigma={1}/>;
  }

  return (
    <div className="App">
      <Layout>
        <Header><Title style={{color:"white"}} level={2}>Function Plots</Title></Header>
        <Layout>
          <Sider><LeftMenu handleChange={(e) => setMenuState(e)}/></Sider>
          <Layout>
            <Content><Body distribution = {renderFromMenu(menuState)}/></Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
