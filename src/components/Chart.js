import React from 'react';
import Plot from 'react-plotly.js';
import groupAndCount from '../utilities/groupAndCount';

const Chart = props => {

  function getGroup(data, filter, missing_numbers, max) {
    const group = groupAndCount(data, filter, missing_numbers, max);
    const obj = [];
    Object.values(group).map(item => {
      return obj.push([item[filter] * 1, item.count])
    })
    return obj;
  }

  function getValues(obj, index) {
    return Object.values(obj).map(item => item[index])
  }

  let ageStrippedData = [];
  props.data.map(item => {
    if(item['age'] <= (props.selectedAge * 1)) {
      ageStrippedData.push(item);
    }
  });

  let ageAs18Data = [];
  props.data.map(item => {
    if(item['age'] <= 18) {
      ageAs18Data.push(item);
    }
  });

  var ages1 = {
    x: getValues(getGroup(ageAs18Data, 'age', true, 23), 0),
    y: getValues(getGroup(ageAs18Data, 'age', true, 23), 1), // counts of each age
    name: 'Age limit as 18',
    type: 'bar'
  }

  var ages2 = {
    x: getValues(getGroup(ageStrippedData, 'age', true, 23), 0),
    y: getValues(getGroup(ageStrippedData, 'age', true, 23), 1), // counts of each age
    name: 'Age limit as selected',
    type: 'bar'
  }

  var seriousness1 = {
    x: getValues(getGroup(ageAs18Data, 'seriousness', true, 6), 0),
    y: getValues(getGroup(ageAs18Data, 'seriousness', true, 6), 1),
    name: 'Age limit as 18',
    type: 'bar'
  }

  var seriousness2 = {
    x: getValues(getGroup(ageStrippedData, 'seriousness', true, 6), 0),
    y: getValues(getGroup(ageStrippedData, 'seriousness', true, 6), 1),
    name: 'Age limit as selected',
    type: 'bar'
  }

  return (
    <div>
      <Plot
        data={[
          ages1, ages2
        ]}
        layout={ {barmode: 'group', title: 'Age Groups'} }
      />
      <Plot
        data={[
          seriousness1, seriousness2
        ]}
        layout={ {barmode: 'group', title: 'Severity'} }
      />
    </div>
  );
}

export default Chart;
