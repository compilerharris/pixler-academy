import React, { useState } from 'react';

const Calculator = () => {

  // Calculation start
    const initalData = {
      number1:"",
      number2:"",
      result:"",
    };
    const [data, setData] = useState(initalData);
    const updateNumber1 = (e) => {
      if(e.target.value == "" ){
        setErrorMsg("Please enter number 1 and 2.");
        setData({ ...data, number1: ""})
      }else{
        setErrorMsg("");
        setData({ ...data, number1: parseInt(e.target.value)})
      }
    }
    const updateNumber2 = (e) => {
      if(e.target.value == "" ){
        setErrorMsg("Please enter number 1 and 2.");
        setData({ ...data, number2: ""})
      }else{
        setErrorMsg("");
        setData({ ...data, number2: parseInt(e.target.value)})
      }
    }
    const calculateResult = (action) => {
      if(action == 'add'){
        if(data.number1 == "" || data.number2 == ""){
          setErrorMsg("Please enter value of number 1 and 2.");
          return 0;
        }
        const result = data.number1 + data.number2;
        setData({ ...data, result: result})
        const newHistory = data.number1+" + "+data.number2+" = "+result;
        setHistory((prevHistory)=>[newHistory,...prevHistory])
      }else if(action == 'sub'){
        if(data.number1 == "" || data.number2 == ""){
          setErrorMsg("Please enter value of number 1 and 2.");
          return 0;
        }
        if(data.number1 >= data.number2){
          const result = data.number1 - data.number2;
          setData({ ...data, result: result})
          const history = data.number1+" - "+data.number2+" = "+result;
          setHistory((prevHistory)=>[history,...prevHistory])
        }else{
          alert("First value " + data.number1 + " must be greater than second value " + data.number2 + ".")
        }
      }else if(action == 'mul'){
        if(data.number1 == "" || data.number2 == ""){
          setErrorMsg("Please enter value of number 1 and 2.");
          return 0;
        }
        const result = data.number1 * data.number2;
        setData({ ...data, result: result})
        const history = data.number1+" * "+data.number2+" = "+result;
        setHistory((prevHistory)=>[history,...prevHistory])
      }else if(action == 'div'){
        if(data.number1 == "" || data.number2 == ""){
          setErrorMsg("Please enter value of number 1 and 2.");
          return 0;
        }
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
    const [errorMsg, setErrorMsg] = useState("");
    const clearHistory = () => {
      setHistory([])
    }
  // history end

  return (
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
            {
              errorMsg == "" ? <></> : <p style={{color:"red"}}>{errorMsg}</p>
            }
            <label className='m-2' htmlFor="number1">Number 1: </label>
            <input className='m-2' type="number" id='number1' placeholder='Enter number' onChange={updateNumber1} value={data.number1} min={1} required/>
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
  )
}

export default Calculator;