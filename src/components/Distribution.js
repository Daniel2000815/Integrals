import React, {Component} from 'react'; 
import Graph from './Graph';
import { Table, Tag, Space } from 'antd';
import RangeSlider from '../components/Slider';

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
 
  constructor(){
    super();

    this.state={
      min:0,
      max:0
    }

  }

  evaluateFunction(f, min, max, step){
    let data = [];
    let labels = [];
    let labelsSimple = [];

    for(var i=min; i<max; i+=step){
      let labelRedondeada = Math.round(i*100)/100;

      labels.push(labelRedondeada);
      data.push(f(labelRedondeada));

      if(labelRedondeada % 1 === 0){
        labelsSimple.push(labelRedondeada.toString());
      }
      else
        labelsSimple.push('');
    }

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

  changeRange = (value) =>{
    this.setState({min:value[0], max:value[1]});
  }

  render(){
    let d = this.evaluateFunction(this.props.funcion , 1, 4, 0.01);
    let r = this.integrateFunction(d[0], d[1], 5,6);

    return(
      <div> 
            <div style={{width:"100%"}}>
              <span style={{float: "left"}}><Graph min={this.state.min} max={this.state.max} labels={d[0]} labelsSimple={d[2]} data={d[1]}/></span>
              <span style={{top:"50%", float: "right"}}><Table pagination={{hideOnSinglePage:true}} columns={columns} dataSource={data}/></span>
              <RangeSlider max={4} min={1} handleChange={this.changeRange}/>
            </div>
            <br></br>
            <p>Integral: {r}</p>
            <p>Atributos: {this.props.lambda}</p>
      </div>
    )
  }

}

export default Distribution;