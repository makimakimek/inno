import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";
import cam1 from './assets/cam1.png'
import cam2 from './assets/cam2.png'
import cam3 from './assets/cam3.jpg'
import cam4 from './assets/cam4.jpg'

function Glass() {
    return (
        <>
        <div className = "page">
            <div className = "container1">
                <div className = "navigationContainer">
                    <div className = "navigationLeft">
                        <div>innopromoo</div>
                    </div>

                    <div className = "navigationRight">
                        <div className = "link"><a href = "/" className = "whiteLink">Anasayfa</a></div>
            
                        <div className = "dropdown">
                            <div className = "products"><a href = "/" className = "whiteLink">Ürünlerimiz</a></div>
                            <div className = "dropdownContent">
                                <Link to = "/promotion">Promosyon</Link>
                                <Link to = "/textile">Tekstil</Link>
                                <Link to = "/anadoludan">Anadoludan</Link>
                            </div>
                        </div>
            
                        <div className = "link"><Link to = "/contact" className = "whiteLink">İletişim</Link></div>
                    </div>
                </div>
            </div>

            <div className = "pageTitle">
                Cam Ürünlerimiz
            </div>

            <div className = "productImageFlexboxContainer">
                <div className = "glassImages">
                    <div className = "glassImageContainer">
                        <img src = {cam1} className = "productImage" alt = "an image of a glass"/>
                        <img src = {cam2} className = "productImage" alt = "an image of a glass"/>
                        <img src = {cam3} className = "productImage" alt = "an image of a glass"/>
                    </div>

                    <div className = "glassImageContainer">
                        <img src = {cam4} className = "productImage" alt = "an image of a glass"/>
                    </div>
                </div>
            </div>
        </div>
        </>
      )
}

export default Glass