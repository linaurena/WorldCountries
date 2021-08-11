import search from './search-icon.svg'

export const Country = ({flag, name, capital, alpha3Code}) => {
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
                <button className='more-info'><img src={search} alt='Search icon' /></button>
            </div>
        </section>
    )
  }