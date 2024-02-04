import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";
import tahta1 from './assets/tahta1.jpg'
import tahta2 from './assets/tahta2.jpg'
import tahta3 from './assets/tahta3.jpg'
import tahta4 from './assets/tahta4.jpg'
import tahta5 from './assets/tahta5.jpg'
import tahta6 from './assets/tahta6.jpg'
import tahta7 from './assets/tahta7.jpg'
import tahta8 from './assets/tahta8.jpg'


function Wood() {
    return (
        <>
        <div className = "page">
            <div className = "container1">
                <div className = "navigationContainer">
                    <div className = "navigationLeft">
                        <div>inno</div>
                    </div>

                    <div className = "navigationRight">
                        <div className = "link"><a href = "/" className = "whiteLink">Anasayfa</a></div>
            
                        <div className = "dropdown">
                            <div className = "products"><a href = "/" className = "whiteLink">Ürünlerimiz</a></div>
                            <div className = "dropdownContent">
                                <Link to = "/PrintingPress">Matbaa</Link>
                                <Link to = "/textile">Tekstil</Link>
                                <Link to = "/glass">Cam</Link>
                                <Link to = "/ceramic">Seramik</Link>
                                <Link to = "/wood">Tahta</Link>
                            </div>
                        </div>
            
                        <div className = "link"><Link to = "/contact" className = "whiteLink">İletişim</Link></div>
                    </div>
                </div>
            </div>

            <div className = "pageTitle">
                Tahta Ürünlerimiz
            </div>

            <div className = "productImageFlexboxContainer">
                <div className = "woodImages">
                    <div className = "woodImageContainer">
                        <img src = {tahta1} className = "productImage" alt = "an image of a wood product"/>
                        <img src = {tahta2} className = "productImage" alt = "an image of a wood product"/>
                        <img src = {tahta3} className = "productImage" alt = "an image of a wood product"/>
                    </div>

                    <div className = "woodImageContainer">
                        <img src = {tahta4} className = "productImage" alt = "an image of a wood product"/>
                        <img src = {tahta5} className = "productImage" alt = "an image of a wood product"/>
                        <img src = {tahta6} className = "productImage" alt = "an image of a wood product"/>
                    </div>

                    <div className = "woodImageContainer">
                        <img src = {tahta7} className = "productImage" alt = "an image of a wood product"/>
                        <img src = {tahta8} className = "productImage" alt = "an image of a wood product"/>
                    </div>
                </div>
            </div>
        </div>
        </>
      )
}

export default Wood