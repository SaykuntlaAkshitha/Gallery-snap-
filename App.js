// import './App.css';
// import React,{useEffect,useState} from 'react'
// function App() {
//   const[data,setData]=useState([]);
//   useEffect(()=>
//   {
//     fetch('https://data.covid19india.org/data.json')
//     .then(res=>res.json())
//     .then(jsondata=>setData(jsondata.statewise));

//   })
//   return (
//     <div className="App">
//       <center>
//         <h1>INDIA COVID-19 DASHBOARD</h1>
//         <table className='table table-hover'>
//           <thead className='table-dark'>
//             <tr>
//               <th>State</th>
//               <th>Confirmed</th>
//               <th>Recovered</th>
//               <th>Deaths</th>
//               <th>Active</th>
//               <th>LastUpdatedtime</th>

//             </tr>
//           </thead>
//             <tbody>
//              {data.map(item=>
//                 {return(
//                   <tr>
//                     <td>{item.state}</td>
//                     <td>{item.confirmed}</td>
//                     <td>{item.recovered}</td>
//                     <td>{item.deaths}</td>
//                     <td>{item.active}</td>

//                     <td>{item.lastupdatedtime}</td>

//                   </tr>
//                 )})}


//             </tbody>
          
//         </table>
//        </center>
//      </div>
//    );
//  }

// export default App;


import React, { useState } from 'react';
import axios from 'axios';
import { Gallery } from './Gallery';
import './App.css'; // Your existing App.css file

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
      .then((response) => setData(response.data.photos.photo));
  };

  const submitButtonStyle = {
    padding: '10px 30px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div>
      <center>
        <h2>Gallery Snap</h2>
        <form onSubmit={submitHandler}>
          <input
            size="40"
            type="text"
            value={search}
            onChange={changeHandler}
            style={{ marginRight: '10px' }} // Optional: Add inline style to the input field
          />
          <br />
          <button style={submitButtonStyle} type="submit">
            Submit
          </button>
        </form>
        <br />
        {data.length >= 1 ? (
          <>
            <h3>Search Results</h3>
            <Gallery data={data} />
          </>
        ) : (
          <h4>No data available...!</h4>
        
        )}
      </center>
    </div>
  );
};

export default App;
