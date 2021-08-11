import { useEffect, useState } from 'react';
import { Country } from '../organisms/Country';
import { InputSearchByName } from '../organisms/InputSearchByName';

export default function Content() {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true);
        
      setTimeout(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then((response) => response.json())
        .then((json) => {
          setCountries(json);
          setLoading(false);
        });
      }, 2000)
    }, []);

    /*
    const handleChange = (event) => {
      setName(event.target.value)
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('yes')
    }
*/
    return (
      <main>
        <InputSearchByName />
        {loading ? 'Loading ...' : ''}
        {countries.map((country) =>
        <Country key={country.name} {...country}/> )}
      </main>
    )
  }
