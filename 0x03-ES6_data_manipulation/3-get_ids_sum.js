export default function getStudentIdsSum(arr) {
  const idArray = arr.map((x) => x.id);
  return idArray.reduce((acc, init) => acc + init, 0);
}
