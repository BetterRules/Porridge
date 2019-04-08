import React from 'react';
import Plot from 'react-plotly.js';
import _ from 'lodash';
import groupAndCount from '../utilities/groupAndCount';

const Chart = props => {

  function getGroup(data, filter) {
    const group = groupAndCount(data, filter);
    const obj = [];
    Object.values(group).map(item => {
      obj.push([item[filter] * 1, item.count])
    })

    return obj;
  }

  function getValues(obj, index) {
    return Object.values(obj).map(item => item[index])
  }

  const trace2Group = [];

  getGroup(props.data, 'age').map(item => {
    if(item[0] === (props.selectedAge * 1)) {
      trace2Group.push([item[0], item[1]])
    }
  })

  var ages1 = {
    x: getValues(getGroup(props.data, 'age'), 0),
    y: getValues(getGroup(props.data, 'age'), 1), // counts of each age
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
    x: getValues(getGroup(props.data, 'seriousness'), 0),
    y: getValues(getGroup(props.data, 'seriousness'), 1),
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
