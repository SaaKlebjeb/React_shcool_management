import { Link,Outlet } from "react-router-dom"

const Classroompage = () => {
  return (
    <div>
      <h1>Classroom page</h1>
      <ul className="flex gap-5 text-white font-bold">
        <Link to='roomA'>Room A</Link>
        <Link to='roomB'>Room B</Link>
        <Link to='replaceroom'>Replace Room</Link>
      </ul>
        <Outlet />
    </div>
  )
}

export default Classroompage
