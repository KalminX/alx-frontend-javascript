export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  for (let val of array) {
    let value = array[idx];
    array[idx] = appendString + value;
    idx++;
  }

  return array;
}
