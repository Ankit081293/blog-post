import { useState, createContext, useEffect } from 'react';

const CountContext = createContext({
    clickCount:0,
    booleanValue: false,
    showAlert: false,
    handleAlert: (val) => {},
    handleBooleanValue: (val) => {},
    handleCount: (count)=>{},
    handleLogout: (val) => {}
});

export function CountContextProvider(props){
    const [counting,setCounting] = useState(0);
    const [boolVal,setBoolVal] = useState(false);
    const [alert,setAlert] = useState({});
    useEffect(() => {
        setBoolVal(sessionStorage.getItem('myBool') == 'true');
    },[]);
    console.log(boolVal, "yes it workedd but how myBool");
    const countClick = (count) => {
        setCounting(count);
        console.log(count,"count++");
    }
    const handleBool = (val) => {
        setBoolVal(val);
        console.log(boolVal,"setBoolean");
    }
    const handleLogout = (val) => {
        setBoolVal(!val);
    }
    const handleAlert = (val) => {
        setAlert((prevState) => ({
            ...prevState,
            ...val
        }));
    }
    const context = {
        clickCount:counting,
        booleanValue: boolVal,
        showAlert:alert,
        handleAlert:handleAlert,
        handleBooleanValue:handleBool,
        handleCount:countClick,
        handleLogout:handleLogout
    }
    return <CountContext.Provider value={context}>
        {props.children}
    </CountContext.Provider>
}

export default CountContext;
