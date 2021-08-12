import axios from 'axios';
import { useEffect, useState } from 'react';
import { Country } from '../organisms/Country';

export default function Content() {
    const [allCountries, setAllCountries] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchCountries, setSearchedCountries] = useState (allCountries);
    const [filterCountries, setFilteredCountries] = useState (allCountries);

    function handleSearch (event) {
      const string = event.target.value.toLowerCase();
      const initial = string.charAt(0).toUpperCase();
      const residuary = string.slice(1);
      const value = initial + residuary;
      let result = [];
      result = allCountries.filter((data) => {
      return data.name.search(value) !== -1;
      });
      setSearchedCountries(result);
      }

    function handleChange (event) {
      const region = event.target.value;
      // console.log(region);
      let resultFilter = [];
      resultFilter = allCountries.filter((data) => {
        /*
        let hey = data.region.search(region) !== -1
        if (hey === true){
          console.log(data)
          console.log(data.name)
          console.log('Yeee! ^')         
        } else {
          console.log(data.name)
          console.log('Wrong :C')
        }*/
        return data.region.search(region) !== -1
      });
      setFilteredCountries(resultFilter);
    };
/*
    function SearchResponse(props) {
      return searchCountries.map((country) =>
        <Country key={country.name} {...country}/> ) 
    }

    function FilterResponse(props) {
      return filterCountries.map((country) =>
      <Country key={country.name} {...country}/> )
    }

    function Content(props) {
      const active = props.active;
      if (active) {
        return <SearchResponse />
      } else {
        return <FilterResponse />
      }
    }*/


    useEffect(() => {
      setLoading(true);
        
      setTimeout(() => {
        axios('https://restcountries.eu/rest/v2/all')
        .then(response => {
          // console.log(response.data)
          setAllCountries(response.data);
          setLoading(false);
          setSearchedCountries(response.data);
          setFilteredCountries(response.data);
          })
          .catch(error => {
          console.log('Error getting: ' + error);
          })
      }, 2000)
    }, []);

    return (
      <main>
        <form className='form-inputs'>
          <input type="text" placeholder='Country name' onChange={(event) =>handleSearch(event)} />
          <select onChange={(event) => handleChange(event)}>
            <option >All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </form>
        {loading ? 'Loading ...' : ''}
        {searchCountries.map((country) =>
        <Country key={country.name} {...country}/> )}
        {filterCountries.map((country) =>
        <Country key={country.name} {...country}/> )}
      </main>
    )
  }
