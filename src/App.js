import React, { useEffect } from 'react'
import Home from './pages/Home'
import { Routes, Route, useNavigate } from 'react-router-dom';
import AllTasks from './pages/AllTasks';
import ImportantTasks from './pages/ImportantTasks';
import CompletedTasks from './pages/CompletedTasks';
import IncompletedTasks from './pages/IncompletedTasks';
import Signup from './pages/Signup';
import Login from './pages/Login';
import {useSelector} from "react-redux";
const App = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    if(isLoggedIn === false) {
      navigate("/login");
    }
   }, [])
  
  return (
    <div className='bg-blue-200 text-black h-screen p-2 relative'>
        <Routes>
          <Route exact path='/' element= {<Home />}>
            <Route index element= {<AllTasks />}/>
            <Route path='/importantTasks' element= {<ImportantTasks />}/>
            <Route path='/completedTasks' element= {<CompletedTasks />}/>
            <Route path='/incompletedTasks' element= {<IncompletedTasks />}/>
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      
    </div>
  )

}

export default App
