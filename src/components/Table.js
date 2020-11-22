import React, {Component} from 'react'; 
import { Table, Tag, Space } from 'antd';


function MyTable(props) {

    const columns = [
        {
        title: 'Media',
        dataIndex: 'm',
        key: 'm',
        width: "200px"
        },
        {
        title: 'Varianza',
        dataIndex: 'v',
        key: 'v',
        width: "200px"
        },
        {
        title: 'Desviación Típica',
        dataIndex: 'd',
        key: 'd',
        width: "200px"
        }
    
    ];

    const data = [
        {
        m:props.media,
        v:props.varianza,
        d:props.varianza**(0.5)
        }
    ]

    return(
        <Table pagination={{hideOnSinglePage:true}} columns={columns} dataSource={data}/>
    );
}

export default MyTable;
        
  