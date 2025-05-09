 import Classroompage from "./component/classroom/Classroompage"
 import Homepage from "./component/home/Homepage"
import { BrowserRouter,Route,Routes} from "react-router-dom"
import Employeepage from "./component/employee/Employeepage"
import Studentpage from "./component/student/Studentpage"
import Notfound from "./component/notfound/Notfound"
import Teacherpage from "./component/teacher/Teacherpage"

import LayoutOne from "./component/layout/LayoutOne"
import M1_class from "./component/classroom/roomtype/M1_class"
import A5_class from "./component/classroom/roomtype/A5_class"
import B2_class from "./component/classroom/roomtype/B2_class"
import C3_class from "./component/classroom/roomtype/C3_class"
function App() {
 return (
  <BrowserRouter>
    <LayoutOne>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/classroom" element={<Classroompage/>}>
        <Route index element={<M1_class/>}/>
        <Route path="RoomM1" element={<M1_class/>}/>
        <Route path="RoomA5" element={<A5_class/>}/>
        <Route path="RoomC3" element={<C3_class/>}/>
        <Route path="RoomB2" element={<B2_class/>} />
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
