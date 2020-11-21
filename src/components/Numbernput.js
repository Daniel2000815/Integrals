import React from 'react';
import {Input, InputNumber, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

const NumberInput = (props) => {
    return(
      <div>
        <Input
            addonBefore={props.text}
            type={"number"}
            style={{ width: '20%' }}
            onChange={props.handleChange}
            defaultValue={props.default}
            min={props.min}
            max={props.max}
        />
      </div>
    )
}

export default NumberInput