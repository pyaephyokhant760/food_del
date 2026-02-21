import React from 'react'
import './Navabar.css'
import {assets} from '../../assets/assets'

const Navabar = () => {
  return (
    <div className='navabar'>
      <img className='logo' src={assets.logo} alt="" />
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navabar