import React from 'react';
import Plot from 'react-plotly.js';
import _ from 'lodash';
import groupAndCount from '../utilities/groupAndCount';

const Chart = props => {

  console.log(groupAndCount(props.data, 'age'))

  var trace1 = {
    x: _.range((props.selectedAge + 1) * 1),
    y: _.range(19), // counts of each age
    name: 'Ages',
    type: 'bar'
  }
  return (
    <div>
      <Plot
        data={[
          trace1
        ]}
        layout={ {barmode: 'group', title: 'Seriousness'} }
      />
    </div>
  );
}

export default Chart;
