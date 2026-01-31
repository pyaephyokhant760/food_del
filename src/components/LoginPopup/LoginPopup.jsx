import React, { use } from 'react'
import './LoginPopup.css'
import { assets} from "../../assets/assets"

const LoginPopup = () => {
    const [currState,setCurrState] = useState("Sign Up"); // login , signup
  return (
    <div className='login-popup'>
        <form action="" className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=> {}} src={assets.cross_icon} alt="" />
            </div>
        </form>
    </div>
  )
}

export default LoginPopup