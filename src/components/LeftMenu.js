import React from 'react';
import Menu from 'antd/es/menu';

const LeftMenu = (props) => {
    return (
        <Menu onClick={props.handleClick}>
          <Menu.Item>
            alo
          </Menu.Item>
          <Menu.Item>
            bais
          </Menu.Item>
        </Menu>
    );
}

export default LeftMenu