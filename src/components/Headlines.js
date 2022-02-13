import React, { useEffect, useState, useContext } from 'react'
import { HeadlineContext } from '../contexts/HeadlineContext';

const Headlines = () => {
  const {headlines, setHeadlines} = useContext(HeadlineContext)
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(
        (jsonifiedResponse) => {
          setIsLoaded(true);
          setHeadlines(jsonifiedResponse.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if(error) {
    return <div>Error: {error.message}</div>
  } else if(!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <React.Fragment>
        <h1>Headlines</h1>
        <ul>
          {headlines.map((headline, index) => (
            <li key={index}>
              <h3>{headline.title}</h3>
              <p>{headline.abstract}</p>
              <hr />
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

export default Headlines