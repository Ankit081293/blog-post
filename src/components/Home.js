import React, { useState , useContext, useEffect } from 'react';
import CountContext from '../contexts/count-context';
import { useNavigate}  from 'react-router-dom';

function Home() {
    const countContext = useContext(CountContext);
    let navigate = useNavigate();
  const [count,setCount] = useState(0);
  const [positive,setPositive] = useState(countContext.booleanValue);
  
  const handleIncreaseCountClick = () => {
    setCount(prevCount => prevCount+1);
    //countContext.handleCount(countContext.clickCount + 1);   
  }
  const handleDecreaseCountClick = () => {
    setCount(prevCount => prevCount-1);
    //countContext.handleCount(countContext.clickCount - 1);
  }


  const handleIncreaseCountClick2 = () => {
    //setCount(prevCount => prevCount+1);
    countContext.handleCount(countContext.clickCount + 1);   
  }
  const handleDecreaseCountClick2 = () => {
    //setCount(prevCount => prevCount-1);
    countContext.handleCount(countContext.clickCount - 1);
  }

  const handleTrueValue = () =>{
    countContext.handleBooleanValue(true);
    const alertObj = {
        "isAlert" : true,
        "message": "Login Successfull",
        "class":"success"
    }
    countContext.handleAlert(alertObj);
    sessionStorage.setItem('myBool', 'true');
    navigate("/about");
  }
  const handleFalseValue = () => {
    setPositive(false);
    sessionStorage.removeItem('myBool');
  }
  useEffect(() => {
    countContext.handleBooleanValue(positive);
    console.log(positive,"REFRESHED");
    //setPositive(false);
  }, [positive])
  useEffect(() => {
    console.log("Count after state update:", count);
    countContext.handleCount(count);
  }, [count]);
  return (
    <div class="container mt-5">
    <h2>Count : {count}</h2>
    <div class="row">
      <div class="col-md-6">
        <button id="increaseButton" class="btn btn-primary" onClick={handleIncreaseCountClick} style={{marginRight:'10px'}}>Increase Count</button>
        <button id="increaseButton" class="btn btn-primary" onClick={handleDecreaseCountClick}>Decrease Count</button>
      </div>
    </div>




    <h2>Count2 : {countContext.clickCount}</h2>
    <div class="row">
      <div class="col-md-6">
        <button id="increaseButton" class="btn btn-primary" onClick={handleIncreaseCountClick2} style={{marginRight:'10px'}}>Increase Count</button>
        <button id="increaseButton" class="btn btn-primary" onClick={handleDecreaseCountClick2}>Decrease Count</button>
      </div>
    </div>

    <h2>Boolean</h2>
    <div class="row">
      <div class="col-md-6">
        <button id="increaseButton" class="btn btn-primary" onClick={handleTrueValue} style={{marginRight:'10px'}}>Set True</button>
        <button id="increaseButton" class="btn btn-primary" onClick={handleFalseValue}>Set False</button>
      </div>
    </div>

{countContext.booleanValue && (
    <div class="banner" style={{marginTop:'50px'}}>
    <h1>Welcome to Our Website</h1>
    <p>This is a sample banner component created using Bootstrap.</p>
    <button class="btn btn-light">Learn More</button>
  </div>
)}


  </div>
  )
}

export default Home
