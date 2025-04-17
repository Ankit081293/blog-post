import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { CountContextProvider } from './contexts/count-context';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import About from './components/About';
import Alert from './components/Alert';
import { Provider } from 'react-redux';
import { store } from './reduxStore/store';

function App() {
  return (
    <>
    <Provider store={store}>
    <CountContextProvider>    
    <BrowserRouter>
    <Navbar/>
    <Alert/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>


    {/* <Router>
        <Navbar />
        <Routes>
          <Route exact path="/">
          <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Routes>
      </Router> */}





    </CountContextProvider>
    </Provider>
    </>
  );
}

export default App;
