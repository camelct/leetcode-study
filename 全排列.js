var arr = [1, 2, 3, 4]


/** 
 * 1 2
 * 2 1
 * 
 * 1 2 3 4
 * 1 2 4 3
 * 1 3 4 2
 * 1 4 3 2
 */

var func = (aim) => {
  var result = [];
  level(0, aim, result)
  console.log('result0', result);
  return result;
}

var level = (index, aim, result) => {
  if (aim[index] === undefined) return result;

  if (!result[index]) {
    result.push([]);
  }

  result[index].push(aim[index]);
  let tempArr = aim.filter(a => a !== aim[index]);
  for (let i = 0; i < tempArr.length; i++) {
    level(i, tempArr, result);
  }

  level(index + 1, aim, result);
}

func(arr);