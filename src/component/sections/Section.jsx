import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Section = ({ title, total, recent, chartData }) => {
  return (
    <div className="w-[1090px] h-full bg-white rounded-lg shadow-md p-5 flex flex-col gap-3">
      <h1 className="text-2xl text-black font-bold">{title}</h1>
      <p className="text-gray-700">
        Total {title}: {total}
      </p>

      <div className="mt-4">
        <h2 className="text-lg text-black font-semibold">Recent {title}</h2>
        <div className="overflow-y-auto max-h-40 ">
          <ul className="list-disc list-inside ">
            {recent.map((item,index) => (
              <li
                className="text-black"
                key={index}
              >
                {item.firstname} {item.lastname}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 w-full rounded-lg bg-gray-100 p-4 shadow-md">
        <h2 className="text-lg text-black font-semibold">
          {title} Distribution by Province
        </h2>
        <BarChart width={1000} height={300} className="w-full text-black" data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="blue" />
        </BarChart>
      </div>
    </div>
  );
};

export default Section;
