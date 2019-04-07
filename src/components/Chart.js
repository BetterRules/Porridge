import React, { useState, useEffect, Fragment } from 'react';
import Plot from 'react-plotly.js';
import _ from 'lodash';

const Chart = props => {

  var data = [
    {'age': 7, 'seriousness':3.8},
    {'age': 16, 'seriousness':4.3},
    {'age': 18, 'seriousness':1.5},
    {'age': 19, 'seriousness':3.2},
    {'age': 17, 'seriousness':2.8},
    {'age': 17, 'seriousness':3.5},
    {'age': 11, 'seriousness':3.6},
    {'age': 17, 'seriousness':2.4},
    {'age': 14, 'seriousness': 4.1},
    {'age': 5, 'seriousness': 3.5},
    {'age': 8, 'seriousness': 3.2},
    {'age': 13, 'seriousness': 2.3},
    {'age': 19, 'seriousness': 2.1},
    {'age': 21, 'seriousness': 2.1},
    {'age': 17, 'seriousness': 3.3},
    {'age': 12, 'seriousness': 1.9},
    {'age': 19, 'seriousness': 1.6},
    {'age': 17, 'seriousness': 1},
    {'age': 18, 'seriousness': 2.4},
    {'age': 11, 'seriousness': 3.7},
    {'age': 12, 'seriousness': 3.2},
    {'age': 8, 'seriousness': 2.8},
    {'age': 16, 'seriousness': 1.7},
    {'age': 17, 'seriousness': 2.8},
    {'age': 19, 'seriousness': 3.7},
    {'age': 10, 'seriousness': 3},
    {'age': 17, 'seriousness': 2.9},
    {'age': 13, 'seriousness': 1.8},
    {'age': 15, 'seriousness': 3.5},
    {'age': 7, 'seriousness': 2.6},
    {'age': 15, 'seriousness': 3.5},
    {'age': 4, 'seriousness': 3.5},
    {'age': 19, 'seriousness': 2.5},
    {'age': 10, 'seriousness': 3.5},
    {'age': 20, 'seriousness': 3},
    {'age': 19, 'seriousness': 3.4},
  ];


  var agesProvided = _(data)
    .groupBy('age')
    .map(function(item, itemId) {
      var arr = [];
      arr.push(itemId * 1)
      return arr[0]
    }).value();

  var minAges = _.min(agesProvided);
  var agesMissing = [];

  for (var i = 0; i < minAges; i++) {
    agesMissing.push(i);
  }

  var agesObj = _(data)
    .groupBy('age')
    .map((item, itemId) => {
      var obj = {};
      obj[itemId] = _.countBy(item, 'age');
      return obj
    }).value();


  agesMissing.forEach(age => {
    agesObj[(agesObj.length + 1)] = {[age]: {[age]: 0}};
  })

  console.log(agesObj)

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
