export default function getListStudentIds(arr) {
  try {
    return arr.map((obj) => obj.id);
  } catch (e) {
    return [];
  }
}
