import React, {Component} from 'react'; 
import Graph from './Graph';
import { Table, Tag, Space } from 'antd';

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
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  }
]

class Distribution extends Component{
 
  /*
  constructor(props){
    super(props);

    this.state={
      media: 0,
      varianza: 0,
      desviacion: 0,
    }

  }

  componentDidUpdate(prevProps) {
    if (this.props.userID !== prevProps.userID) {
      // do stuf
    }
  }
  */

  evaluateFunction(f, min, max, step){
    let data = [];
    let labels = [];
    let labelsSimple = [];

    for(var i=min; i<max; i+=step){
      let labelRedondeada = Math.round(i*100)/100;

      labels.push(i);
      data.push(f(i));

      if(labelRedondeada % 1 === 0){
        labelsSimple.push(labelRedondeada.toString());
        console.log("añadir: " + labelRedondeada);
      }
      else
        labelsSimple.push('');
    }
    console.log(labelsSimple);
    return [labels, data, labelsSimple];
  }

  integrateFunction(labels, data, min, max){
    let result = 0;

    for(var i=0; i<labels.length-1; i++){
      if(labels[i]>=min && labels[i]<max)
        result += data[i];
    }

    return result / (labels[1]-labels[0]);
  }

  render(){
    let d = this.evaluateFunction(this.props.funcion , 2, 10, 0.01);
    let r = this.integrateFunction(d[0], d[1], 5,6);

    return(
      <div> 
            <div style={{width:"100%"}}>
              <span style={{float: "left"}}><Graph labels={d[2]} data={d[1]}/></span>
              <span style={{top:"50%", float: "right"}}><Table pagination={{hideOnSinglePage:true}} columns={columns} dataSource={data}/></span>
            </div>
            <br></br>
            <p>Integral: {r}</p>
            <p>Atributos: {this.props.lambda}</p>
      </div>
    )
  }

}

export default Distribution;