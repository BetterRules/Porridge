import React from 'react';
import Plot from 'react-plotly.js';

const Chart = props => {

    var ageRange = ['14', '15', '16', '17', '18', '19', '20', '21', '22'];
    var trace1 = {
        x: ageRange,
        y: [20, 14, 23],
        name: 'Current State',
        type: 'bar'
      };

      var trace2 = {
        x: ageRange,
        y: [12, 18, 29],
        name: 'Proposed State',
        type: 'bar'
      };

  return (

      <Plot
        data={[
            trace1, trace2
        ]}
        layout={ {barmode: 'group', title: ''} }
      />
  );
}

export default Chart;
