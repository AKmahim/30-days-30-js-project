// import WeatherIcon from '/images/clear.png'
import PropTypes from 'prop-types'

const TemDetails = ({tem,city,country,weatherIcon}) => {
    // console.log(city);
    // console.log(tem);
    // console.log(weatherIcon[0]);
    // const Icon = `/images/${weatherIcon[0]}.png`
    const Icon = `/images/haze.png`

    return (
        <div className='flex justify-center'>
            <div className='flex justify-center flex-col'>
                <div>
                    <img src={Icon} className='lg:h-[80%] h-[60%] mt-4 mx-auto px-auto'  />
                </div>
                <div className='text-center'>
                    <h1 className='md:text-5xl text-3xl text-white font-bold'>{tem?.temp}°C</h1>
                    <h2 className='md:text-3xl text-xl text-white '>{city},{country}</h2>
                </div>
            </div>
            
        </div>
    );
};

TemDetails.propTypes ={
    tem: PropTypes.object,
    city: PropTypes.string,
    country: PropTypes.string,
    weatherIcon:PropTypes.object,

}

export default TemDetails;