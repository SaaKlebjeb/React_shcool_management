
const ContentOne = (props) => {
  return (
    <div className="bg-cyan-900 h-[533px] w-full overflow-x-scroll  ">
        <div>{props.children}</div>
    </div>
  )
}

export default ContentOne