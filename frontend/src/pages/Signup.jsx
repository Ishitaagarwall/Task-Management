import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
const Signup = () => {
  const [Data, setData] = useState({username:"", email:"", password:""});
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data,[name]: value })
  };
  const submit = async() => {
    if(Data.username === "" || Data.email === "" || Data.password === "")
    {
      alert("All fields are required");
    } else {
      const response = await axios.post("http:localhost:1000/api/vp1/sign-in", Data)
    }
  }
  return (
    <div className='h-[98vh] flex items-center justify-center'>
        <div className='p-4 w-2/6 rounded bg-gray-800'>
            <div className='text-2xl font-semibold'>Signup</div>
            <input type='username' placeholder='username' className='bg-gray-700 px-3  py-2 my-3 w-full rounded' name='username' value={Data.username} onChange={change}/>
            <input type='email' placeholder='email' className='bg-gray-700 px-3  py-2 my-3 w-full rounded' name='xyz@example.com' value={Data.email}required onChange={change}/>
            <input type='password' placeholder='password' className='bg-gray-700 px-3  py-2 my-3 w-full rounded' name='password' value={Data.password}onChange={change}/>
            <div className='w-full flex items-center justify-between'>
        <button className='bg-blue-400 text-lg font-sans text-white px-3 py-2 rounded' onClick={submit}>SignUp</button>
        <Link to="/login" className='text-gray-400 hover:text-gray-200'>Already have an account? Click Here</Link>
        </div>
        </div>
    </div>
  )
}

export default Signup