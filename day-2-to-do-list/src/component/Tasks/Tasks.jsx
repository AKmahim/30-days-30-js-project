

import PropTypes from 'prop-types'
import Task from '../Task/Task';


const Tasks = ({tasks,handleTaskDelete}) => {

    
    return (
        <div className="mt-2">
            <ul>
                {
                    tasks.map(task=><Task task={task} handleTaskDelete={handleTaskDelete}></Task>)
                }
                
            </ul>
        </div>
    );
};

Tasks.propTypes = {
    tasks: PropTypes.array,
    handleTaskDelete: PropTypes.func
}


export default Tasks;