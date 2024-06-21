import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Tasks =({task ,handleClick , handleTaskClick})=>{
    return(
        <div className="text-center li-div d-flex justify-content-between align-items-center bg-white px-3 py-2 mt-1 rounded mb-3">
              <li onClick={handleClick} style={{ cursor: "pointer" ,color :"red" }} className="bg-white">{task}</li>
              <FontAwesomeIcon onClick={handleTaskClick} style={{ cursor: "pointer" }} icon={faXmark} />
            </div>
    )
}
export default Tasks