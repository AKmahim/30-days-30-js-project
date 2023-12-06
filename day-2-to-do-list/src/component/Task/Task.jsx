import PropTypes from 'prop-types'
import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";

const Task = ({task,handleTaskDelete}) => {


    const [check,setCheck] = useState(false)

    const handleCheckBoxClick = ()=>{
        setCheck(!check);
    }
    const handleDeleteButton = ()=>{
        handleTaskDelete(task);
    }

    return (
        <li>
            <div className="flex justify-between items-center">
                <div className="flex  items-center cursor-pointer font-bold" onClick={handleCheckBoxClick} > 
                    <div className="form-control  mr-2">
                        <label className="cursor-pointer label ">
                                    
                            <input type="checkbox"   checked="" className="checkbox  checkbox-success " />
                        </label>
                    </div>
                    <p className={check && 'line-through'}>{task}</p>
                </div>
                <button
                className="text-2xl"
                 onClick={handleDeleteButton}>
                    <IoCloseSharp />
                </button>
               
            </div>
        </li>
    );
};

Task.propTypes = {
    task: PropTypes.any,
    handleTaskDelete: PropTypes.func,
}

export default Task;