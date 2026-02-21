import React from 'react'
import Navabar from './components/Navabar/Navabar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes , Route} from 'react-router-dom'
import Add from './components/pages/Add/Add'
import List from './components/pages/List/List'
import Order from './components/pages/Orders/Order'

const App = () => {
  return (
    <>
    <Navabar/>
    <hr/>
    <div className="app-content">
      <Sidebar/>
      <Routes>
        <Route path="/add" element={<Add/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/order" element={<Order/>}/>
      </Routes>
    </div>
    </>
    
  )
}

export default App