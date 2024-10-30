export default function createReportObject(employeesList) {
  let allEmployees = {
    ...employeesList,
  };
  function getNumberOfDepartments(allEmployees) {
    return Object.keys(allEmployees).length;
  }

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
