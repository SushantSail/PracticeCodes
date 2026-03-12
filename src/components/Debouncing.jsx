import React, { useState, useEffect, useCallback } from 'react';

export default function App() {
  const [word, setWord] = useState('');
  const [data, setData] = useState([]);
  const[loading ,setLoading] = useState(false);

  async function getApi(input) {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await res.json();
      console.log(input,':',result);
      setData(result);
      setLoading(false);
    } catch (err) {
      console.log('Error Occured', err);
    }
  }

  function debounce(fn, delay) {
    let timer;
    return function (value) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(value);
      }, delay);
    };
  }

  const debounceFn = useCallback(debounce(getApi, 3000), []);

  useEffect(() => {
    if (word) {
      debounceFn(word);
    }
  }, [word, debounceFn]);

  return (
    <div>
      <input type="text" onChange={(e) => {setWord(e.target.value); setLoading(true) }} />
      <button>Search</button>

      <hr />
      <ul>
{
  loading ? 'Loading the Data' : 
(
 data.map((item)=>(
    <li key={item.id}>{item.name}</li>
  ))
)
}


     
</ul>
    </div>
  );
}
