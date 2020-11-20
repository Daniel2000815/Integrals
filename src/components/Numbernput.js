import React from 'react';
import { Input, InputNumber, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

const NumberInput = (props) => {
    return(
      <div>
        <InputNumber
            style={{ width: '20%' }}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/\$\s?|(,*)/g, '')}
            onChange={props.handleChange}
            defaultValue={props.default}
            min={props.min}
            max={props.max}
        />
      </div>
    )
}

export default NumberInput