import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";
import placeholder from './assets/placeholder.jpg'
import kalem1 from './assets/kalem1.JPG'
import defter1 from './assets/defter1.JPG'
import defter2 from './assets/defter2.jpg'

function PrintingPress() {
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
                            <div className = "whiteLink">Ürünlerimiz</div>
                            <div className = "dropdownContent">
                                <a href = "PrintingPress">Matbaa</a>
                                <a href = "textile">Tekstil</a>
                                <a href = "glass">Cam</a>
                                <a href = "ceramic">Seramik</a>
                            </div>
                        </div>
            
                        <div className = "link"><a href = "contact" className = "whiteLink">İletişim</a></div>
                    </div>
                </div>
            </div>

            <div className = "pageTitle">
                Matbaa Ürünlerimiz
            </div>

            <div className = "productImageFlexboxContainer">
                <div className = "printingPressImageContainer">
                    <img src = {kalem1} className = "productImage" alt = "an image of a pen"/>
                    <img src = {defter1} className = "productImage" alt = "an image of a notebook"/>
                    <img src = {defter2} className = "productImage" alt = "an image of a notebook"/>
                </div>
            </div>
        </div>
        </>
      )
}

export default PrintingPress