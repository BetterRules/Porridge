import React from 'react';
import Plot from 'react-plotly.js';
import groupAndCount from '../utilities/groupAndCount';

const Chart = props => {

  function getGroup(data, filter, missing_numbers) {
    const group = groupAndCount(data, filter, missing_numbers);
    const obj = [];
    Object.values(group).map(item => {
      return obj.push([item[filter] * 1, item.count])
    })

    return obj;
  }

  function getValues(obj, index) {
    return Object.values(obj).map(item => item[index])
  }

  const trace2Group = [];

  getGroup(props.data, 'age', true).map(item => {
    if(item[0] === (props.selectedAge * 1)) {
      trace2Group.push([item[0], item[1]])
    }
    return trace2Group;
  })

  var ages1 = {
    x: getValues(getGroup(props.data, 'age', true), 0),
    y: getValues(getGroup(props.data, 'age', true), 1), // counts of each age
    name: 'Ages',
    type: 'bar'
  }

  var ages2 = {
    x: getValues(trace2Group, 0),
    y: getValues(trace2Group, 1), // counts of each age
    name: 'Selected Age',
    type: 'bar'
  }

  var seriousness1 = {
    x: getValues(getGroup(props.data, 'seriousness', false), 0),
    y: getValues(getGroup(props.data, 'seriousness', false), 1),
    name: 'Seriousness',
    type: 'bar'
  }

  return (
    <div>
      <Plot
        data={[
          ages1, ages2
        ]}
        layout={ {barmode: 'group', title: 'Ages'} }
      />
      <Plot
        data={[
          seriousness1
        ]}
        layout={ {barmode: 'group', title: 'Severity'} }
      />
    </div>
  );
}

export default Chart;
