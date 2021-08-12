export const CountryPopup = ({flag, name, capital, alpha3Code, region, subregion, population}) => {
    return (
        <article className='overlay-popup'>
            <figure>
                <img className='country-flag' src={flag} alt='flag'></img>
            </figure>
            <ul className='data-card'>
                <li className='country-name'>{name}</li>
                <li className='country-cap'>{capital}</li>
                <li className='country-region'>{region}</li>
                <li className='country-subregion'>{subregion}</li>
                <li className='country-population'>{population}</li>
            </ul>
            <div>
                <span className='country-code'>{alpha3Code}</span>
                <button className='more-info'>x</button>
            </div>
        </article>
    )
  }