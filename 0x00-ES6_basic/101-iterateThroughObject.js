export default function iterateThroughObject(reportWithIterator) {
  let result = [];
  let i = 0;
  for (const val of reportWithIterator) {
    result.push(val);
  }
  return result.join(" | ");
}
