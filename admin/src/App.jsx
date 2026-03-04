import React from 'react'
import Navabar from './components/Navabar/Navabar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes , Route} from 'react-router-dom'
import Add from './components/pages/Add/Add'
import List from './components/pages/List/List'
import Order from './components/pages/Orders/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:4000"
  return (
    <>
    <ToastContainer/>
    <Navabar/>
    <hr/>
    <div className="app-content">
      <Sidebar/>
      <Routes>
        <Route path="/add" element={<Add url={url}/>}/>
        <Route path="/list" element={<List url={url}/>}/>
        <Route path="/order" element={<Order url={url}/>}/>
      </Routes>
    </div>
    </>
    
  )
}

export default App