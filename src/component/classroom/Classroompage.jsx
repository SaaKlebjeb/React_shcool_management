import { Link, Outlet } from "react-router-dom";
import { rooms } from "./roomtype/Roomtype_And_Student";
const Classroompage = () => {
  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Classroom List</h1>
      <div className="flex flex-shrink-0 gap-6 overflow-x-auto p-4 max-h-[200px] w-full ">
        {rooms.map((room) => (
          <Link
            to={`${room.name}`}
            key={room.id}
            className="bg-gradient-to-tr from-white via-blue-50 to-white rounded-2xl shadow-lg hover:shadow-blue-300 hover:scale-[1.03] active:scale-95 transition-all duration-300 ease-in-out p-5 group min-w-[250px]"
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl font-bold text-gray-700 group-hover:text-blue-600 transition">
                  {room.name}
                </h2>
                <p
                  className={`mt-2 text-sm font-medium ${
                    room.status === "Available"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {room.status}
                </p>
              </div>
              <div className="mt-4">
                <div className="w-full h-1 bg-blue-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      room.status === "Available"
                        ? "bg-green-400"
                        : "bg-red-400"
                    } transition-all duration-500`}
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

export default Classroompage;
