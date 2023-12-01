import HumidityIcon from '/images/humidity.png'
import WindIcon from '/images/wind.png'

import PropTypes from 'prop-types'

const ExtraDetails = ({wind,humidity}) => {
    // console.log(wind.speed)
    return (
        <div>
            <div className="flex justify-between  mt-10 ">
                <div>
                    <div className='flex items-center'>
                        <img src={HumidityIcon} className='w-10 h-10' />
                        <div className='text-center text-white ms-3'>
                            <h1 className='md:text-3xl font-bold'>{humidity}%</h1>
                            <p className='md:text-2xl'>Humidity</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center'>
                        <img src={WindIcon} className='w-12 h-12' />
                        <div className='text-center text-white ms-3'>
                            <h1 className='md:text-3xl font-bold'>{wind} km/h</h1>
                            <p className='md:text-2xl'>Wind Speed</p>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

ExtraDetails.propTypes ={
    wind: PropTypes.object,
    humidity: PropTypes.string,
}

export default ExtraDetails;