import React, { useState ,useEffect } from 'react';
import './style.css';

export default function App() {
  const lights = ["red", "yellow", "green"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % lights.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (

    <div className="main">
    <div className="container">
      {lights.map((light, index) => (
        <div
          key={light}
          className={`item ${current === index ? light : ""}`}
        ></div>
      ))}
    </div>
  </div>

  );
}



// .main{
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
// }
// .container{
//   border: 3px solid black;
//   width: 150px;
//   background-color: black;
//   border-radius: 30px;
// }

// .item{
//   border: 1px solid black;
//   padding: 40px;
//   margin: 15px;
//   border-radius: 100%;
//   background: grey;
// }

// .red{
//   background: red;
// }

// .yellow{
//   background: yellow;
// }

// .green{
//   background: green;
// }
