import React from 'react';
import { Bar } from 'react-chartjs-2';

const Graph = (props) => {
    const graphData= {
        labels: props.labels,
        datasets: [
          {
            backgroundColor: 'rgba(75,192,192, 0.6)',
            highlightStroke: "rgba(220,220,220,1)",
            borderWidth: 0,
            data: props.data
          }
        ]
    }

    return (
        <span><div style={{ width: "500px" }}>
            <Bar
                data={graphData}
                options={{
                    legend:{
                        display: false
                    },
                   responsive: true,
                   title: {text: props.title, display: true},
                   scales:{
                       yAxes:[
                           {
                               ticks:{
                                    autoSkip: true,
                                    beginAtZero: true,
                                    min: 0,
                               }
                           }
                       ]
                   }
                }}
            />
        </div></span>
    );
}

export default Graph
