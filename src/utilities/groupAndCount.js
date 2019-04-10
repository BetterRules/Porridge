import _ from 'lodash';

function getMissingValues(array, max) {
  let v = 0,
    i = (max) ? max : array.length,
    result = [];
console.log(max);
  while (i--) {
    if (!array.includes(v)) result.push(v);
    ++v;
  }
  return result;
}

function sortObj(data, group, missing_numbers, max) {
  let dataProvided = _(data)
    .groupBy(group)
    .map((item, itemId) => {
      let arr = [];
      arr.push(itemId * 1)
      return arr[0]
    }).value();

  let dataObj = _(data)
    .groupBy(group)
    .map((item, itemId) => {
      let obj = {};
      obj[itemId] = _.countBy(item, group);
      return obj
    }).value();

  if(missing_numbers) {
    getMissingValues(dataProvided, max).forEach(data => {
      dataObj[(dataObj.length + 1)] = {[data]: {[data]: 0}};
    })
  }

  return dataObj;
}

function groupAndCount(data, group, missing_numbers, max) {
  let Obj = sortObj(data, group, missing_numbers, max);
  const newObj = []
  Obj.forEach(item => {
    for (const [key, val] of Object.entries(item)) {
      newObj.push({[group]: key, count: val[key]})
    }
  })

  return newObj;
}

export default groupAndCount;
