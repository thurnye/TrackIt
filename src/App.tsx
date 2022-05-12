import React from 'react';
import {Router, Routes, Route} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import './App.scss';
import Dashboard from './pages/Dashboard/Dashboard';
import HomePage from './pages/HomePage/HomePage';
import NoMatch from './pages/NoMatch/NoMatch';

function App() {
  // const user = useSelector((state:any) => state.userLog.user.user)
  // console.log("user", user)

  return (
    <div className="App">
      Welcome to Track-It 
      <Routes>
          <Route path="/"  element={<HomePage />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/dashboard"  element={<Dashboard />}/>
          
           
      </Routes>
    </div>
  );
}

export default App;
