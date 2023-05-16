
import React, { useState } from 'react';
import './Homs.css';
import Histogram from './Histogram';
import {CSVLink} from 'react-csv';

const headers=[
  {
    label:'Word', key:'a'
  },{
    label:'Frequency', key:'b'
  }
]


function Homs() {
  const [word, setCount] = useState({});
  

  //I used this to fetch data
  const ftchData = () => {
    fetch('https://www.terriblytinytales.com/test.txt').then((data) => data.text())
    .then((ans) => {

      console.log(ans);

      const words = ans.trim().split(/\s+/);
      const cnt = {};
      for (const w of words) {
        cnt[w] = (cnt[w] || 0) + 1;
      }

      const entry = Object.entries(cnt);  //this function converts object into array so that we could use map
      const entry1 = entry.sort((a, b) => (b[1] - a[1])).slice(0, 20);
      console.log(entry1[0]); //checking if it works 

      
      let sortedEntry = Object.fromEntries(entry1);  
      delete sortedEntry["20"];
      delete sortedEntry["140"];
      setCount(sortedEntry);
      console.log(Object.entries(word));
      alert("Data fetched (see console) now you can scroll a bit and see the histogram!");

    })
    .catch((error) => {
      console.log(error);
    })
  }


  
  return (
    <div className='hm'>

      <span style={{ display: "block", paddingTop: "120px", paddingBottom: "20px", margin: "auto auto", fontSize: "30px", width: "80%" }}> Welcome to this app <br /> Press the button below to fetch data and see graph <br /><br /><br />
  Click -> <input className='btn' type="submit" value="Fetch" onClick={ftchData} />


        <br />

        <div>Display 👇</div>

        <br />
        <Histogram data={Object.entries(word)} />

      </span>
      

      
    

      <h3>Top 20 List:</h3>
      
      <table className='tb'>
        <thead>
          <tr><th>Word</th> <th>Frequency</th></tr>
        </thead>
        <tbody>
          {Object.entries(word).map(([a,b])=>(
            <tr key={a}>
              <td>{a}</td>
              <td>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <CSVLink data={Object.entries(word)} headers={headers} filename='mycsv.csv'>
      <button className='btn-primary'>Export</button>
      </CSVLink>
   
    </div>
  )
}

export default Homs;
