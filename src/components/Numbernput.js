import React from 'react';
import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

const NumberInput = (props) => {
    return(
      <div>
        <Input
            style={{ width: '20%' }}
            placeholder="Introduce un valor"
            addonBefore= {props.text}
            onChange={props.handleChange}
        />

      </div>
    )
}

export default NumberInput