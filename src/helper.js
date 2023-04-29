import React, { useState, useEffect } from 'react';

const NumberList = ({ urls }) => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        const results = await Promise.all(
          urls.map(async url => {
            const response = await fetch(url);
            const data = await response.json();
            return data.numbers;
          })
        );
        const mergedNumbers = Array.from(new Set(results.flat()));
        setNumbers(mergedNumbers.sort((a, b) => a - b));
      } catch (error) {
        console.error(`Error fetching numbers: ${error}`);
      }
    };

    fetchNumbers();
  }, [urls]);

  return (
    <ul>
      {numbers.map(number => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
};

export default NumberList;
