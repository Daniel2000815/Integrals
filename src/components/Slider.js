import { Slider, Switch } from 'antd';
import { useState } from 'react';


const RangeSlider = (props) => {
    //const [v, setV] = useState(0);

    return(
        <div>
        <span style={{width:"500px", float:"right"}}>
        <Slider 
            range defaultValue={[props.min, props.max]} 
            step={1} 
            min={props.min} 
            max={props.max} 
            onChange={props.handleChange}
        />
        </span>
        </div>
    )
}

export default RangeSlider