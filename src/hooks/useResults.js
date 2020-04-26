import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

const INITIAL_TERM = 'mc donalds';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    searchApi(INITIAL_TERM);
  }, []);

  const searchApi = async term => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term,
          limit: 50,
          location: 'warsaw'
        }
      });
      setResults(response.data.businesses);
      setErrorMessage('');
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  return [searchApi, results, errorMessage];
};
