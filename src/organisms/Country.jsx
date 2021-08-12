import search from './search-icon.svg'
import { useEffect, useState } from 'react';
import { CountryPopup } from './CountryPopup'

export const Country = ({flag, name, capital, alpha3Code}) => {
    const [dataCountryPopup, setDataCountryPopup] = useState([])

    function handleClick (event){
        console.log('Card is clicking')
        console.log({name})
        return(
            <CountryPopup />
        )
    }

    useEffect(() => {
        setDataCountryPopup();
      }, []);

    return (
        <section className='card'>
            <figure>
                <img className='country-flag' src={flag} alt='flag'></img>
            </figure>
            <ul className='data-card'>
                <li className='country-name'>{name}</li>
                <li className='country-cap'>{capital}</li>
            </ul>
            <div>
                <span className='country-code'>{alpha3Code}</span>
                <button className='more-info' onClick={handleClick}><img src={search} alt='Search icon' /></button>
            </div>
        </section>
    )
  }