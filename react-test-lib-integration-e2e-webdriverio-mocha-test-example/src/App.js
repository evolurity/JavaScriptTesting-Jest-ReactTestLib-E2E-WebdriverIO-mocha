// import './App.css';
// import {useEffect, useState} from "react";
//
// function App() {
//     const [data, setData] = useState(null);
//     const [toggle, setToggle] = useState(false);
//
//     const [value, setValue] = useState('')
//
//     const onClick = () => {
//         setToggle(prevState => !prevState);
//     }
//
//     useEffect(() => {
//         setTimeout(() => {
//             setData({})
//         }, 100)
//     }, [])
//
//
//     return (
//         <div className="App">
//             <h1 data-testid={'value-elem'}>{value}</h1>
//             {toggle && <div data-testid={"toggle-elem"}>toggle</div>}
//             {data && <div style={{color: "red"}}>data</div>}
//             <h1>Simple App for testing</h1>
//             <button data-testid={"toggle-btn"} onClick={onClick}>Click me</button>
//             <input onInput={(event => setValue(event.target.value))} data-testid={"input-field"} type="text" placeholder={"test text"}/>
//         </div>
//     );
// }
//
// export default App;

import React, {Component} from 'react';
import AppRouter from "./routes/AppRouter";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <AppRouter/>
            </div>
        );
    }
}

export default App;