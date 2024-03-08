'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

interface CountryCapital {
  capital: string[];
}

const CountriesAPI = () => {
  const [countries, setCountries] = useState<CountryCapital[]>([]);

  const getCountriesInfo = async () => {
    // const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital');
    const response = await axios.get('https://restcountries.com/v3.1/all?fields=capital');
    console.log(response.data);
    if (response.data) {
      setCountries(response.data);
    }
  };

  useEffect(() => {
    getCountriesInfo();
  }, []);

  return (
    <>
      <div>Countries API</div>

      {countries.map((country, index) => (
        <div key={`${country.capital[0]}${index}`}>
          <div>{country.capital[0]}</div>
        </div>
      ))}
    </>
  );
};

export default CountriesAPI;
