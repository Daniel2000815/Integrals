import React, {Component} from 'react'; 
import Graph from './Graph';
import RangeSlider from '../components/Slider';
import MyTable from '../components/Table'



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
              <span style={{top:"50%", float: "right"}}> <MyTable media={this.props.media} varianza={this.props.varianza}/> </span>
              <RangeSlider width="500px" max={4} min={1} handleChange={this.changeRange}/>
            </div>
            <br></br>
            <p>Integral: {r}</p>
            <p>Atributos: {this.props.lambda}</p>
      </div>
    )
  }

}

export default Distribution;