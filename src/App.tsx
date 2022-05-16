import React,{useEffect, useState} from 'react';
import { loadCSS } from 'fg-loadcss';
import jwt_decode from "jwt-decode";
import {Routes, Route} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {userSelector, login} from './store/userSlice'
import './App.scss';
import Dashboard from './pages/Dashboard/Dashboard';
import LandingPage from './pages/LandingPage/LandingPage';
import NoMatch from './pages/NoMatch/NoMatch';
import {NavBar}  from './components'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(userSelector)
  let token = localStorage.getItem('token')
  
  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v6.0.0/css/all.css'
    );

    return () => {
      node.parentNode!.removeChild(node);
    };
  }, []);

  useEffect(() => {
    if(token){
      const user:any = jwt_decode(token)
      dispatch(login(user))
    }
  },[token, dispatch])


  
  return (
    <div className="App">
      <NavBar user={user}/>
      <Routes>
        <Route path="/"  element={<LandingPage user={user} />} />
        <Route path="*" element={<NoMatch />} />
        {/* {user && <Route path="/dashboard"  element={<Dashboard user={user}/>}/>} */}
         <Route path="dashboard"  element={<Dashboard user={user}/>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
