import { React, useContext, useState, useEffect} from 'react';
import CountContext from '../contexts/count-context';
import { Link }from 'react-router-dom';
import { useNavigate}  from 'react-router-dom';

function Navbar() {
   let navigate = useNavigate(); 
  const countContext = useContext(CountContext);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    sessionStorage.removeItem('myBool');
    //setIsLoggedIn(true);
    countContext.handleBooleanValue(false);
    console.log("logout clickeddd");
    const alertObj = {
        "isAlert" : true,
        "message": "Logged Out Successfull",
        "class":"warning"
    }
    countContext.handleAlert(alertObj);
    navigate("/");
  }
//   useEffect(() => {
    
//     console.log("loggedout successfully");
//   },[isLoggedIn]);
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Count - {countContext.clickCount}</a>
        </li>
      </ul>
      {!countContext.booleanValue ? (
    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" value={countContext.booleanValue} aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    ) : (
        <div>
            {/* HTML content for the else condition */}
            <p onClick={handleLogout} style={{cursor:'pointer'}}>Logout</p>
        </div>
    )}
        </div>
    </div>
    </nav>
  )
}

export default Navbar
