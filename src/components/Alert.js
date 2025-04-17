import React,{ useContext, useEffect } from 'react'
import CountContext from '../contexts/count-context';

function Alert() {
   let countContext = useContext(CountContext);
    
    // hideAlert();
    useEffect(() => {
        const hideAlert = () => {
            setTimeout(() => {
                const alertObj = {
                    "isAlert" : false,
                    "message": "Login Successfull",
                    "class":"success"
                }
                countContext.handleAlert(alertObj);
            },3000)
            console.log();
        }
        hideAlert();
    },[countContext.showAlert])
  return (
    countContext.showAlert.isAlert && 
    <div className={`alert alert-${countContext.showAlert.class} alert-dismissible fade show`} role="alert">
        {countContext.showAlert.message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  )
}

export default Alert
