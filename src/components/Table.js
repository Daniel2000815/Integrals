import React, {Component} from 'react'; 
import { Table, Tag, Space } from 'antd';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

function MyTable(props) {

    const columns = [
        {
            title: 'Fución Densidad',
            dataIndex: 'fd',
            key: 'm',
            width: "200px"
        },
        {
            title: 'Fución Masa Probabilidad',
            dataIndex: 'fm',
            key: 'm',
            width: "200px"
        },
        {
            title: 'F.G. Momentos',
            dataIndex: 'momen',
            key: 'd',
            width: "200px"
        },
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
        width: '70%'
        }
    
    ];

    const data = [
        {
        m:<BlockMath math={props.stringMedia}/>,
        v:<BlockMath math={props.stringVarianza}/>,
        d:<BlockMath math={props.stringDesviacion}/>,
        fd:<BlockMath math={props.stringFuncionDensidad}/>,
        fm:<BlockMath math={props.stringFuncionMasa}/>,
        momen:<BlockMath math={props.stringFuncionMomentos}/>
        }
    ]

    return(
        <Table pagination={{hideOnSinglePage:true}} columns={columns} dataSource={data}/>
    );
}

export default MyTable;
        
  