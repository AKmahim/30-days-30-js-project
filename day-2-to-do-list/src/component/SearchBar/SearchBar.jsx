import { useState } from 'react';
import './SearchBar.css'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2'

const SearchBar = ({handleTaskEntry}) => {

    const [inputValue,setInputValue] = useState('')

    const handleInputChange = (e)=>{
        setInputValue(e.target.value);

    }

    const handleAddButtonClick = ()=>{
        
        if(inputValue === ''){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You Must Type a Task",
                
              });
        }
        else{
            handleTaskEntry(inputValue);
            setInputValue('');

        }
    }

    return (
        <div className='mt-4'>
            
            <div className="relative  bg-[#edeef0] rounded-[30px]">
                <input className="w-full p-4 pl-5 pr-32 r text-base  border 
                rounded-xl focus:shadow-outline" 
                type="text" 
                placeholder="Input Your Task"
                onChange={handleInputChange}
                value={inputValue}/>
                <button 
                className="absolute inset-y-0 right-0
                 flex items-center px-14 py- text-white
                  bg-[#ff5945]  rounded-[30px] text-[16px]"
                  onClick={handleAddButtonClick}>
                 Add
                </button>
            </div>
        </div>
        
    );
};

SearchBar.propTypes = {
    handleTaskEntry: PropTypes.func.isRequired,
}



export default SearchBar;