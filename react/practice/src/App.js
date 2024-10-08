import './App.css';
import Profile from './components/Profile';
import React, { useState, useEffect } from 'react';

function App() {

  // Calculation start
    const initalData = {
      number1:"",
      number2:"",
      result:"",
    };
    const [data, setData] = useState(initalData);
    const updateNumber1 = (e) => {
      setData({ ...data, number1: parseInt(e.target.value)})
    }
    const updateNumber2 = (e) => {
      setData({ ...data, number2: parseInt(e.target.value)})
    }
    const calculateResult = (action) => {
      if(action == 'add'){
        const result = data.number1 + data.number2;
        setData({ ...data, result: result})
        const history = data.number1+" + "+data.number2+" = "+result;
        setHistory((prevHistory)=>[history,...prevHistory])
      }else if(action == 'sub'){
        if(data.number1 >= data.number2){
          const result = data.number1 - data.number2;
          setData({ ...data, result: result})
          const history = data.number1+" - "+data.number2+" = "+result;
          setHistory((prevHistory)=>[history,...prevHistory])
        }else{
          alert("First value " + data.number1 + " must be greater than second value " + data.number2 + ".")
        }
      }else if(action == 'mul'){
        const result = data.number1 * data.number2;
        setData({ ...data, result: result})
        const history = data.number1+" * "+data.number2+" = "+result;
        setHistory((prevHistory)=>[history,...prevHistory])
      }else if(action == 'div'){
        const result = data.number1 / data.number2;
        setData({ ...data, result: result})
        const history = data.number1+" / "+data.number2+" = "+result;
        setHistory((prevHistory)=>[history,...prevHistory])
      }else{
        setData(initalData)
      }
    }
  // calculation end

  // history start
    const [histories, setHistory] = useState([]);
    const clearHistory = () => {
      setHistory([])
    }
  // history end

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {/* Result */}
          <div className='card'>
            <div className="card-body">
              <h1>Result: {data.result}</h1>
            </div>
          </div>
          {/* Numbers */}
          <div className='card'>
            <div className="card-body">
              <label className='m-2' htmlFor="number1">Number 1: </label>
              <input className='m-2' type="number" id='number1' placeholder='Enter number' onChange={updateNumber1} value={data.number1}/>
              <label className='m-2' htmlFor="number2">Number 2: </label>
              <input className='m-2' type="number" id='number2' placeholder='Enter number' onChange={updateNumber2} value={data.number2} />
            </div>
          </div>
          {/* Operators */}
          <div className='card'>
            <div className="card-body">
              <input className='m-2 p-2 fs-2' type="button" value="+" onClick={()=>calculateResult('add')} />
              <input className='m-2 p-2 fs-2' type="button" value="-" onClick={()=>calculateResult('sub')} />
              <input className='m-2 p-2 fs-2' type="button" value="*" onClick={()=>calculateResult('mul')} />
              <input className='m-2 p-2 fs-2' type="button" value="/" onClick={()=>calculateResult('div')} />
              <input className='m-2 p-2 fs-2' type="button" value="C" onClick={()=>calculateResult('clear')} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3>History</h3>
              {
                histories.length == 0?
                  <p>No history found.</p>
                :
                  <>
                    <ol>
                      {
                        histories.map((history,key)=>{
                          return <li key={key}>{history}</li>
                        })
                      }
                    </ol>
                    <input className='m-2 fs-6' type="button" value="Clear" onClick={clearHistory} />
                  </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // const [data, setData] = useState({
  //   name:"",
  //   age:"",
  //   city:"",
  // });

  // const [isEmpty, setIsEmpty] = useState(true);

  // const updateName = (e) => {
  //   setData({ ...data, name: e.target.value})
  //   setIsEmpty( (e.target.value == '' && data.age == '' && data.city == '') ? true : false )
  // }
  // const updateAge = (e) => {
  //   setData({ ...data, age: e.target.value})
  //   setIsEmpty( (data.name == '' && e.target.value == '' && data.city == '') ? true : false )
  // }
  // const updateCity = (e) => {
  //   setData({ ...data, city: e.target.value})
  //   setIsEmpty( (data.name == '' && data.age == '' && e.target.value == '') ? true : false )
  // }

  // return (
  //   <div className="container">
  //     { isEmpty ? 
  //       <h1>No Data.</h1>
  //       :
  //       <>
  //         {
  //           data.name != '' ?
  //             <h1>Name: {data.name}</h1>
  //           : 
  //             <></>
  //         }
  //         {
  //           data.age != '' ?
  //             <h1>Age: {data.age}</h1>
  //           : 
  //             <></>
  //         }
  //         {
  //           data.city != '' ?
  //             <h1>City: {data.city}</h1>
  //           : 
  //             <></>
  //         }
  //       </>
  //     }
  //     <input type="text" placeholder='Name' onChange = {updateName} />
  //     <input type="text" placeholder='Age' onChange = {updateAge} />
  //     <input type="text" placeholder='City' onChange = {updateCity} />
  //   </div>
  // )

  // const [profiles, setProfiles] = useState([]);

  // useEffect(() => {
  //   fetch('/data/profiles.json')
  //       .then(response => response.json())
  //       .then(data => setProfiles(data))
  //       .catch(error => console.error('Error fetching the profiles:', error));
  // },[]);

  // return (
  //   <div className="container mt-5">
  //     <h1>Github Profiles</h1>
  //     <div className="row">
  //       {
  //         profiles.map((profile, key) => {
  //           return (
  //             <Profile key={key} profile={profile} />
  //           )
  //         })
  //       }
  //     </div>
  //   </div>
  // );
}

export default App;