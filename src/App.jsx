import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './Components/Contact'
import Create from './Components/Create'
import Edit from './Components/Edit'

const App = () => {
  return (
    <div className=' container'>

      <Routes>
        <Route path='/' element={<Contact/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/edit/:id' element={<Edit/>} />
      </Routes>
    </div>
  )
}

export default App