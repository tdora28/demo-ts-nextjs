'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface CountryDetails {
  capital: string[];
  name: CountryInfo;
}

interface CountryInfo {
  common: string;
  official: string;
  nativeName: NativeNames;
}

interface NativeNames {
  [key: string]: LanguageDetails;
}

interface LanguageDetails {
  official: string;
  common: string;
}

const CountriesAPI = () => {
  const [countries, setCountries] = useState<CountryDetails[]>([]);

  const getCountriesInfo = async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital');
    // const response = await axios.get('https://restcountries.com/v3.1/all?fields=capital');
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
      <h2>Countries API</h2>

      {/* <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem', marginBottom: '2rem', padding: '1rem' }}>
              <h2>Country</h2>
              <h5>Capital</h5>
            </Card>
          </Col>
        </Row>
      </Container> */}

      {countries.map((country, index) => (
        <Card key={`${country.capital[0]}_${index}`} style={{ width: '18rem', marginBottom: '2rem', padding: '1rem' }}>
          <h2>{country.name.common}</h2>
          <small>(Official name: {country.name.official})</small>
          <h5>Native names:</h5>
          <ul>
            {Object.entries(country.name.nativeName).map(([key, value]) => (
              <li key={key} style={{ listStyleType: 'disc' }}>
                {key} - {value.common}
              </li>
            ))}
          </ul>
          <p>Capital: {country.capital[0]}</p>
        </Card>
      ))}
    </>
  );
};

export default CountriesAPI;
