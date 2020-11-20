import React, {Component} from 'react'; 
import Graph from './Graph';

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

    for(var i=min; i<max; i+=step){
      labels.push(i);
      data.push(f(i));
    }

    return [labels, data];
  }

  integrateFunction(labels, data, min, max){
    let result = 0;

    for(var i=0; i<labels.length-1; i++){
      if(labels[i]>=min && labels[i]<max)
        result += (labels[i+1]-labels[i]) * data[i];
    }

    return result;
  }

  render(){
    let d = this.evaluateFunction(this.props.funcion , 2, 10, 0.01);
    let r = this.integrateFunction(d[0], d[1], 5,6);

    return(
      <div> 
            <h1>{this.props.name}</h1>
            <Graph labels={d[0]} data={d[1]}/>
            <p>Integral: {r}</p>
            <p>Atributos: {this.props.lambda}</p>
      </div>
    )
  }

}

export default Distribution;