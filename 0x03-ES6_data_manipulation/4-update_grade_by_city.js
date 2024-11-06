export default function updateStudentGradeByCity(studentList, city, gradeList) {
  const students = studentList.filter((student) => student.location === city);
  const newGradeList = students.map((student) => {
    const grades = gradeList.filter((grade) => grade.studentId === student.id);
    let studentGrade;
    try {
      studentGrade = grades[0].grade;
    } catch (e) {
      studentGrade = 'N/A';
    }
    return {
      ...student,
      grade: studentGrade,
    };
  });
  return newGradeList;
}
