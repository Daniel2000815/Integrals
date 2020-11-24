import React from 'react';
import Uniforme from '../Distributions/Uniforme';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import Breadcrumb from 'antd/lib/breadcrumb';

const Body = () => {
    return(
      <div style={{background:"#fff", padding:25, minHeight:530}}>
      <Breadcrumb>
        <BreadcrumbItem>
          <Uniforme a={2} b={3}/>
        </BreadcrumbItem>
      </Breadcrumb>
      </div>
    )
}

export default Body