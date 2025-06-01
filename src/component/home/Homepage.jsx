import { useEffect, useState } from "react";
import { GetEmployee } from "../../service/EmployeeService";
import { GetStudent } from "../../service/StudentService";
import { GetTeacher } from "../../service/TeacherService";
import Section from "../sections/Section";
const TECH_URL = `${import.meta.env.VITE_API_URL}/api/teacher`;
const STU_URL = `${import.meta.env.VITE_API_URL}/api/student`;
const EMP_URL = `${import.meta.env.VITE_API_URL}/api/employee`;
const Homepage = () => {
  const [employees, setEmployees] = useState([]);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
// fetch all data
useEffect(() => {
  const fetchData = async () => {
    const empData = await GetEmployee(EMP_URL);
    const stuData = await GetStudent(STU_URL);
    const teaData = await GetTeacher(TECH_URL);
    setEmployees(empData);
    setStudents(stuData);
    setTeachers(teaData);
  };
  fetchData()
}, []);



  // Prepare data (e.g., employee count by province)
  const getProvinceStats = (data) =>
    data.reduce((acc, item) => {
      acc[item.province] = (acc[item.province] || 0) + 1;
      return acc;
    }, {});
    //
    const employeeStats = Object.entries(getProvinceStats(employees)).map(([province, count]) => ({ name: province, count }));
    const studentStats = Object.entries(getProvinceStats(students)).map(([province, count]) => ({ name: province, count }));
    const teacherStats = Object.entries(getProvinceStats(teachers)).map(([province, count]) => ({ name: province, count }));
    
  return (
    <div className="flex flex-col gap-3 w-full h-full bg-gray-200 p-5 overflow-x-auto">
  {/* EMPLOYEES */}
  <Section
    title="Employees"
    total={employees.length}
    recent={employees}
    chartData={employeeStats}
  />

  {/* STUDENTS */}
  <Section
    title="Students"
    total={students.length}
    recent={students}
    chartData={studentStats}
  />

  {/* TEACHERS */}
  <Section
    title="Teachers"
    total={teachers.length}
    recent={teachers}
    chartData={teacherStats}
  />
</div>

  );
};

export default Homepage;
