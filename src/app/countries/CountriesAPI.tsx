'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

const CountriesAPI = () => {
  const [countries, setCountries] = useState([]);

  const getCountriesInfo = async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital');
    console.log(response.data);
    if (response.data) {
      setCountries(response.data);
    }
  };

  useEffect(() => {
    getCountriesInfo();
  }, []);

  return (
    <div>
      <div>Countries API will be here</div>
    </div>
  );
};

export default CountriesAPI;
