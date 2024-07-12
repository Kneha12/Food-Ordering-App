import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br/> Tomato App</p>
      <div className="app-download-platforms">
        <img src={assets.play_store}  alt="" />
        {/* <a href="https://play.google.com/store/games?hl=en"></a> */}
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
