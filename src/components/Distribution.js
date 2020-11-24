import React, {Component} from 'react'; 
import Graph from './Graph';
import RangeSlider from '../components/Slider';
import MyTable from '../components/Table'
import Latex from 'react-latex';


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

    let mediaString = this.props.media.toFixed(4).toString();
    let varianzaString = this.props.varianza.toFixed(4).toString();
    let desviacionString = (this.props.varianza**(0.5)).toFixed(4).toString();

    return(
      <div style={{marginTop:"-190px"}}>
        <div style={{float:"left"}}> 
          <Graph min={this.state.limitInf} max={this.state.limitMax} labels={d[0]} labelsSimple={d[2]} data={d[1]}/>
        </div>
        <div style={{float:"left", marginLeft:"50px",marginTop:"100px"}}>
          Calcular probabilidad en el rango:
          <RangeSlider step={this.props.step} width="500px" max={this.props.max} min={this.props.min} handleChange={this.changeRange}/>
          Resultado: {r}
        </div>
            
        
        <div style={{
          position: "relative",
          verticalAlign: "center",
          marginTop:"200px",
          height: "90px",
          }}>
        <MyTable 
          stringMedia={this.props.stringMedia + "=" + mediaString} 
          stringVarianza={this.props.stringVarianza + "="+ varianzaString}
          stringDesviacion={this.props.stringDesviacion +"="+ desviacionString}
          stringFuncionMasa = {this.props.stringFuncionMasa}
          stringFuncionDensidad={this.props.stringFuncionDensidad}
          stringFuncionMomentos={this.props.stringFuncionMomentos}/>
        </div>
      </div>
    )
  }

}

export default Distribution;