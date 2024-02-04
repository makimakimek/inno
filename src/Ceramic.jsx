import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";
import kupa1 from './assets/kupa1.JPG'
import kupa2 from './assets/kupa2.JPG'
import seramik3 from './assets/seramik3.jpg'

function Ceramic() {
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
                                <Link to = "/wood">Ahşap</Link>
                            </div>
                        </div>
            
                        <div className = "link"><Link to = "/contact" className = "whiteLink">İletişim</Link></div>
                    </div>
                </div>
            </div>

            <div className = "pageTitle">
                Seramik Ürünlerimiz
            </div>

            <div className = "productImageFlexboxContainer">
                <div className = "ceramicImages">
                    <div className = "ceramicImageContainer">
                        <img src = {kupa1} className = "productImage" alt = "an image of a mug"/>
                        <img src = {kupa2} className = "productImage" alt = "an image of a mug"/>
                        <img src = {seramik3} className = "productImage" alt = "an image of a mug"/>
                    </div>
                </div>
            </div>

        </div>
        </>
      )
}

export default Ceramic