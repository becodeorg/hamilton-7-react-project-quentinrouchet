import '../../sass/components/current-weather.scss';

const CurrentWeather = ({data}) => {
    return (
        <div className='weather'>
            <div className='weather--top'>
                <img src={require(`../../icon/${data.weather[0].icon}.png`)} alt="weather" className='weather-icon' />
                <div>
                    <p className='weather-description'>{data.weather[0].description}</p>
                    <p className='city'>{data.city}</p>
                </div>
                <p className='temperature'>{Math.round(data.main.temp)}°C</p>
            </div>
            
            <div className='weather--bottom'>
                <div className='details'>
                    <div className='parameter-row'>
                        <img src={require(`../../icon/thermometer.png`)} alt="icon" className='details__icon' />
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className='parameter-row'>
                        <img src={require(`../../icon/wind.png`)} alt="icon" className='details__icon' />
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{data.wind.speed} m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <img src={require(`../../icon/water-drop.png`)} alt="icon" className='details__icon' />
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{data.main.humidity}%</span>
                    </div>
                    <div className='parameter-row'>
                        <img src={require(`../../icon/pressure.png`)} alt="icon" className='details__icon' />
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;