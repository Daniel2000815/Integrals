import React, {Component} from 'react'; 
import Graph from './Graph';

class Distribution extends Component{
 
  constructor () {
    super();
  }

  render(){
    
    return(
      <div> 
            <h1>{this.props.name}</h1>
            <Graph/>
      </div>
    )
  }

}

export default Distribution;