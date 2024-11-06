export default function hasValuesFromArray(a, arr) {
  return a.isSupersetOf(new Set(arr));
}
