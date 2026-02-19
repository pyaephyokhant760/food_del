import React from 'react'
import Navabar from './components/Navabar/Navabar'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <>
    <Navabar/>
    <hr/>
    <div className="app-content">
      <Sidebar/>
    </div>
    </>
    
  )
}

export default App