import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserNavbar from './components/layout/UserNavbar'
import Login from './components/common/Login'
import Signup from './components/common/Signup'
import Admin from './components/common/Admin'
import UserForm from './components/layout/UserForm'
import HomePage from './components/common/HomePage'
import Footer from './components/common/Footer'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserNavbar/>

    <Routes>

      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/new' element={<UserForm/>}></Route>


    </Routes>

    <Footer/>
    </>
  
  )
}

export default App
