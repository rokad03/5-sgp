import { useState } from 'react';
import './App.css';
import Homepage from './components/home/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Switch from "react-switch";

function App() {

  const [user,setLoginUser]=useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={
            
              user && user._id ? <Homepage/>:<Login setLoginUser={setLoginUser}/>
            }>
          </Route>
          <Route exact path="/home" element={ <Homepage></Homepage>}>
        </Route>
          <Route exact path="/login" element={<Login  setLoginUser={setLoginUser}/>}></Route>
          <Route exact path="/register" element={< Register/>}></Route>
        </Routes>
      </Router>
     
       
    </div>
  );
}

export default App;
