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

function groupAndCount(data, group) {
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

  getMissingValues(dataProvided).forEach(data => {
    dataObj[(dataObj.length + 1)] = {[data]: {[data]: 0}};
  })

  return dataObj;
}

export default groupAndCount;
