export default function orderByProps(obj, props = []) {
  if (typeof(obj) != 'object') {
    throw new Error('В функцию переданы неверные данные');
  } else {

  let output = [];
  for (let prop in obj) {
    output.push({
      key: prop,
      value: obj[prop],
    })
  }

  // сортировка полученного массива по алфавиту
  output.sort((a, b) => {
    return a.key > b.key;
  })

  // извлечение из массива параметров в указанной последовательности
  let insertArray = [];
  props.forEach((elemProps) => {
    let index = output.findIndex(elemOutput => elemOutput.key === elemProps)
    insertArray.push(...output.splice(index, 1));
  })
  
  // формирование возвращаемого массива
  output.unshift(...insertArray);

  return output;
}
}
