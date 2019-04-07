import _ from 'lodash';

function groupAndCount(data, group) {
  var dataProvided = _(data)
    .groupBy(group)
    .map((item, itemId) => {
      var arr = [];
      arr.push(itemId * 1)
      return arr[0]
    }).value()

  var minData = _.min(dataProvided);
  var dataMissing = [];

  for (var i = 0; i < minData; i++) {
    dataMissing.push(i);
  }

  var dataObj = _(data)
    .groupBy(group)
    .map((item, itemId) => {
      var obj = {};
      obj[itemId] = _.countBy(item, group);
      return obj
    }).value();


  dataMissing.forEach(data => {
    dataObj[(dataObj.length + 1)] = {[data]: {[data]: 0}};
  })

  return dataObj;
}

export default groupAndCount;
