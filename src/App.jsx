 import Classroompage from "./component/classroom/Classroompage"
 import Homepage from "./component/home/Homepage"
import { BrowserRouter,Route,Routes} from "react-router-dom"
import Employeepage from "./component/employee/Employeepage"
import Studentpage from "./component/student/Studentpage"
import Navbar from "./navbar/Navbar"
import RoomB from "./component/classroom/subclassroom/RoomB"
import RoomA from "./component/classroom/subclassroom/RoomA"
import Notfound from "./component/notfound/Notfound"
import ReplaceRoom from "./component/classroom/subclassroom/ReplaceRoom"
import NewRoom from "./component/classroom/subclassroom/NewRoom"
import Teacherpage from "./component/teacher/Teacherpage"

// import NewRoom from "./component/classroom/subclassroom/NewRoom"
import LayoutOne from "./component/layout/LayoutOne"
function App() {
 return (
  <BrowserRouter>
    <LayoutOne>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/classroom" element={<Classroompage/>}>
        <Route index element={<RoomA/>}/>
        <Route path="roomA" element={<RoomA/>}/>
        <Route path="roomB" element={<RoomB/>}/>
        <Route path="replaceroom" element={<ReplaceRoom/>}/>
        <Route path="newroom" element={<NewRoom/>} />
        
      </Route>
      <Route path="/employee" element={<Employeepage/>}/>
      <Route path="/student" element={<Studentpage/>}/>
      <Route path="/teacher" element={<Teacherpage/>}/>
      <Route path="*" element={<Notfound/>}/>
    </Routes>
    </LayoutOne>
  </BrowserRouter>
 )
}

export default App
