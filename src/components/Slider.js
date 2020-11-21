import { Slider, Switch } from 'antd';
import { useState } from 'react';


const RangeSlider = (props) => {
    const [v, setV] = useState(0);

    return(
        <div>
        <span style={{width: "100px" , float:"left"}}><p>[{v[0]}, {v[1]}]</p></span>
        <span style={{width:"500px", float:"right"}}>
        <Slider 
            range defaultValue={[props.min, props.max]} 
            step={1} 
            min={props.min} 
            max={props.max} 
            onChange={(value)=>setV(value)}
        />
        </span>
        </div>
    )
}

export default RangeSlider