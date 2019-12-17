export default function orderByProps(obj, props = []) {
  if (typeof (obj) !== 'object') {
    throw new Error('В функцию переданы неверные данные');
  }

  const output = [];
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      output.push({
        key: prop,
        value: obj[prop],
      });
    }
  }

  // сортировка полученного массива по алфавиту
  output.sort((a, b) => a.key.localeCompare(b.key));

  // извлечение из массива параметров в указанной последовательности
  const insertArray = [];
  props.forEach((elemProps) => {
    const index = output.findIndex((elemOutput) => elemOutput.key === elemProps);
    insertArray.push(...output.splice(index, 1));
  });

  // формирование возвращаемого массива
  output.unshift(...insertArray);

  return output;
}
