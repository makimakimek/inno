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
import tekstil1 from './assets/tekstil1.jpg'
import tekstil2 from './assets/tekstil2.jpg'
import tekstil3 from './assets/tekstil3.jpg'
import tekstil4 from './assets/tekstil4.jpg'

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
                                <Link to = "PrintingPress">Matbaa</Link>
                                <Link to = "textile">Tekstil</Link>
                                <Link to = "glass">Cam</Link>
                                <Link to = "ceramic">Seramik</Link>
                                <Link to = "wood">Tahta</Link>
                            </div>
                        </div>
            
                        <div className = "link"><Link to = "contact" className = "whiteLink">İletişim</Link></div>
                    </div>
                </div>
            </div>

            <div className = "pageTitle">
                Tekstil Ürünlerimiz
            </div>

            <div className = "productImageFlexboxContainer">
                <div className = "textileContainer">
                    <div className = "lineBefore2"></div>
                    <div className = "textileTitle">
                        Restoran
                    </div>
                    <div className = "lineAfter2"></div>
                </div>

                <div className = "textileImages">
                    <div className = "textileImageContainer">
                        <img src = {tekstil1} className = "productImage" alt = "an image of a textile product"/>
                        <img src = {tekstil4} className = "productImage" alt = "an image of a textile product"/>
                        <img src = {tekstil2} className = "productImage" alt = "an image of a textile product"/>
                    </div>

                    <div className = "textileImageContainer">
                        <img src = {tekstil3} className = "productImage" alt = "an image of a textile product"/>
                    </div>
                </div>

                <div className = "textileContainer">
                    <div className = "lineBefore2"></div>
                    <div className = "textileTitle">
                        Ev ve Otel
                    </div>
                    <div className = "lineAfter2"></div>
                </div>

                <div className = "textileImages">
                    <div className = "textileImageContainer">
                        <img src = {yastik1} className = "productImage" alt = "an image of a pillow"/>
                        <img src = {yastik3} className = "productImage" alt = "an image of a pillow"/>
                        <img src = {yastik5} className = "productImage" alt = "an image of a pillow"/>
                    </div>

                    <div className = "textileImageContainer">
                        <img src = {yastik7} className = "productImage" alt = "an image of a pillow"/>
                        <img src = {yastik9} className = "productImage" alt = "an image of a pillow"/>
                    </div>
                </div>  

                <div className = "textileContainer">
                    <div className = "lineBefore2"></div>
                    <div className = "textileTitle">
                        Anadoludan
                    </div>
                    <div className = "lineAfter2"></div>
                </div>              
            </div>
        </div>
        </>
      )
}

export default Textile