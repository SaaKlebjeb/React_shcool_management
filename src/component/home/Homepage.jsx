import { useEffect, useState } from "react";
import { GetEmployee } from "../../service/EmployeeService";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
const Homepage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetEmployee();
      setEmployees(data);
    };
    fetchData();
  }, []);
  // Prepare data (e.g., employee count by province)
  const provinceStats = employees.reduce((acc, emp) => {
    acc[emp.province] = (acc[emp.province] || 0) + 1;
    return acc;
  }, {});
  const chartData = Object.entries(provinceStats).map(([province, count]) => ({
    name: province,
    count,
  }));
  
  return (
    <div className="flex flex-col gap-3 w-full h-full bg-gray-200 p-5">
      <div className="w-full h-full bg-white rounded-lg shadow-md p-5 flex flex-col gap-3">
        <h1 className="text-2xl text-black font-bold">Welcome to the Homepage</h1>
        <p className="text-gray-700">Total Employees: {employees.length}</p>
        
        <div className="mt-4">
          <h2 className="text-lg text-black font-semibold">Recent Employees</h2>
          <ul className="list-disc list-inside">
            {employees.slice(0,5).map((emp) => (
              <li className="text-black" key={emp.employee_id}>{emp.firstname} {emp.lastname}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full h-full bg-white rounded-lg shadow-md p-5 flex flex-col gap-3">
        <h2 className="text-lg text-black font-semibold">Employee Distribution by Province</h2>
        <BarChart width={900} height={300} className="text-black" data={chartData}>
          <XAxis  dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count"  fill="blue" />
        </BarChart>
      </div>
    </div>
  );
};

export default Homepage;
