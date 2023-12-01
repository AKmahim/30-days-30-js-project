import searchIcon from '/images/search.png'
import './SearchBar.css'
import { useState } from 'react';

import PropTypes from 'prop-types'


const SearchBar = ({handleSearchByCity}) => {


    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = () => {
        // console.log(inputValue);
        handleSearchByCity(inputValue);
    };


    return (
        <div className="flex justify-center ">
            <div>
                <input 
                type="text" 
                id='search-box' 
                name="search-box" 
                className="bg-[#ebfffc] rounded-3xl lg:py-4 md:px-5 py-3  text-xl" 
                value={inputValue}
                onChange={handleInputChange} />
            </div>
            <div className='flex items-center'>
                <button onClick={handleButtonClick}><img src={searchIcon} className='ms-4 w-10 hover:scale-75' /></button>
            </div>
        </div>
    );
};

SearchBar.propTypes = {
    handleSearchByCity: PropTypes.func
}

export default SearchBar;