import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";
import placeholder from './assets/placeholder.jpg'
import yastik1 from './assets/yastik1.jpg'
import yastik2 from './assets/yastik2.jpg'
import yastik3 from './assets/yastik3.jpg'
import yastik4 from './assets/yastik4.jpg'
import yastik5 from './assets/yastik5.jpg'
import yastik6 from './assets/yastik6.jpg'
import yastik7 from './assets/yastik7.jpg'
import yastik8 from './assets/yastik8.jpg'
import yastik9 from './assets/yastik9.jpg'

function Textile() {
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
                Tekstil Ürünlerimiz
            </div>

            <div className = "productImageFlexboxContainer">
                <div className = "textileImageContainer">
                    <img src = {yastik1} className = "productImage" alt = "an image of a pillow"/>
                    <img src = {yastik2} className = "productImage" alt = "an image of a pillow"/>
                    <img src = {yastik3} className = "productImage" alt = "an image of a pillow"/>
                </div>

                <div className = "textileImageContainer">
                    <img src = {yastik4} className = "productImage" alt = "an image of a pillow"/>
                    <img src = {yastik5} className = "productImage" alt = "an image of a pillow"/>
                    <img src = {yastik6} className = "productImage" alt = "an image of a pillow"/>
                </div>

                <div className = "textileImageContainer">
                    <img src = {yastik7} className = "productImage" alt = "an image of a pillow"/>
                    <img src = {yastik8} className = "productImage" alt = "an image of a pillow"/>
                    <img src = {yastik9} className = "productImage" alt = "an image of a pillow"/>
                </div>
            </div>
        </div>
        </>
      )
}

export default Textile