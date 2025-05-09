import React from "react";

const StudentDetail = (props) => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id={props.modalID} className="modal ">
        <div className="modal-box bg-white">
          <form method="dialog">
            <div className="w-full h-full gap-3 flex flex-row justify-center items-center ">
              <img
                className="w-[40%] h-full rounded-lg"
                src={props.Image}
                alt={props.Roomtype}
              />
              <div className="content w-[50%] p-2 h-full items-start">
                <p className="mt-4 font-mono text-[15px] text-black">
                  ID:<span className="text-gray-500"> {props.ID}</span>
                </p>
                <p className="mt-4 font-mono text-[15px] text-black">
                  RoomType:
                  <span className="text-gray-500"> {props.Roomtype}</span>
                </p>
                <p className="mt-4 font-mono text-[15px] text-black text-lg​​​ ">
                  Name:<span className="text-gray-500"> {props.Name}</span>
                </p>
                <p className="mt-4 font-mono text-[15px] text-black text-lg​​​">
                  Gender:<span className="text-gray-500"> {props.Gender}</span>
                </p>
                <p className="mt-4 font-mono text-[15px] text-black text-lg​​​">
                  Age:<span className="text-gray-500"> {props.Age}</span>
                </p>
              </div>
            </div>
            <button className="btn btn-sm bg-black text-white btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default StudentDetail;
