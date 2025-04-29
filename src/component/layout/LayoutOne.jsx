import HeaderOne from "../layout/HeaderOne"
import LeftSideBar from "../layout/LeftSideBar"
import ContentOne from "./ContentOne"


const LayoutOne = (props) => {
  return (
    <div className="h-screen">
        <HeaderOne/>
       <div className="flex flex-row">
        <LeftSideBar/>
        <ContentOne>
            {props.children}
        </ContentOne>
        </div> 
    </div>
  )
}

export default LayoutOne