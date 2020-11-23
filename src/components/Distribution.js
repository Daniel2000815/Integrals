import React, {Component} from 'react'; 
import Graph from './Graph';
import RangeSlider from '../components/Slider';
import MyTable from '../components/Table'



class Distribution extends Component{
 
  constructor(){
    super();

    this.state={
      limitInf:0,
      limitMax:0
    }

  }

  

  evaluateFunction(f, min, max, step){
    let data = [];
    let labels = [];
    let labelsSimple = [];
    let factor = 1/step;

    for(var i=min*factor; i<=max*factor; i++){
      let labelRedondeada = Math.round((i/factor) *100)/100;
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

    return (result * this.props.step).toFixed(4);
  }

  changeRange = (value) =>{
    this.setState({limitInf:value[0], limitMax:value[1]});
  }

  render(){
    let d = this.evaluateFunction(this.props.funcion , this.props.min, this.props.max, this.props.step);
    let r = this.integrateFunction(d[0], d[1], this.state.limitInf, this.state.limitMax);

    return(
      <div> 
            <div style={{width:"100%"}}>
              <span style={{float: "left"}}><Graph min={this.state.limitInf} max={this.state.limitMax} labels={d[0]} labelsSimple={d[2]} data={d[1]}/></span>
              <span style={{top:"50%", float: "right"}}> <MyTable media={this.props.media} varianza={this.props.varianza}/> </span>
              <RangeSlider step={this.props.step} width="500px" max={this.props.max} min={this.props.min} handleChange={this.changeRange}/>
            </div>
            <br></br>
            <p>Integral: {r}</p>
            <p>Atributos: {this.props.lambda}</p>
      </div>
    )
  }

}

export default Distribution;