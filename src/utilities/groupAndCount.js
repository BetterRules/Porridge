import _ from 'lodash';

function getMissingValues(array) {
  var v = 0,
    i = array.length,
    result = [];

  while (i--) {
    if (!array.includes(v)) result.push(v);
    ++v;
  }
  return result;
}

function sortObj(data, group, missing_numbers) {
  var dataProvided = _(data)
    .groupBy(group)
    .map((item, itemId) => {
      var arr = [];
      arr.push(itemId * 1)
      return arr[0]
    }).value()

  var dataObj = _(data)
    .groupBy(group)
    .map((item, itemId) => {
      var obj = {};
      obj[itemId] = _.countBy(item, group);
      return obj
    }).value();

  if(missing_numbers) {
    getMissingValues(dataProvided).forEach(data => {
      dataObj[(dataObj.length + 1)] = {[data]: {[data]: 0}};
    })
  }

  return dataObj;
}

function groupAndCount(data, group, missing_numbers) {
  var Obj = sortObj(data, group, missing_numbers);

  const newObj = []
  Obj.map(item => {
    for (const [key, val] of Object.entries(item)) {
      newObj.push({[group]: key, count: val[key]})
    }
  })

  return newObj;
}

export default groupAndCount;
