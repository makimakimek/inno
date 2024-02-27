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
import cam1 from './assets/cam1.png'
import cam2 from './assets/cam2.png'
import tahta1 from './assets/tahta1.jpg'
import tahta6 from './assets/tahta6.jpg'
import tahta7 from './assets/tahta7.jpg'
import anadoludan1 from './assets/anadoludan1.jpg'
import anadoludan2 from './assets/anadoludan2.jpg'
import anadoludan3 from './assets/anadoludan3.jpg'
import anadoludan4 from './assets/anadoludan4.jpg'
import anadoludan5 from './assets/anadoludan5.jpg'
import anadoludan6 from './assets/anadoludan6.jpg'
import anadoludan7 from './assets/anadoludan7.jpg'
import anadoludan8 from './assets/anadoludan8.jpg'
import anadoludan9 from './assets/anadoludan9.PNG'

function Anadoludan() {
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
                Anadoludan Ürünlerimiz
            </div>

            <div className = "anadoludanParagraph">
                <div className = "innerParagraphContainer3">
                    Ülkemizin çeşitli yörelerinden temin ettiğimiz zanaatkarlar tarafından özel olarak
                    üretilen ürünlerin satışını yapmaktayız. Bunlar içerisinde yerel tezgahlarda el
                    dokuması kumaşlardan (örn: Gaziantep bölgesinden Kutnu Kumaşı) üretilen tasarım
                    tekstil ürünleri, el işi seramik, ahşap ve cam ürünler bulunmaktadır.
                </div>
            </div>

            <div className = "productImageFlexboxContainer">
                <div className = "textileImages">
                    <div className = "textileImageContainer">
                        <img src = {yastik3} className = "productImage" alt = "an image of a pillow"/>
                        <img src = {yastik9} className = "productImage" alt = "an image of a pillow"/>
                        <img src = {yastik1} className = "productImage" alt = "an image of a pillow"/>
                    </div>
                </div>

                <div className = "textileImages">
                    <div className = "textileImageContainer">
                        <img src = {yastik5} className = "productImage" alt = "an image of a pillow"/>
                        <img src = {cam1} className = "productImage" alt = "an image of a glass"/>
                        <img src = {cam2} className = "productImage" alt = "an image of a glass"/>
                    </div>
                </div>

                <div className = "textileImages">
                    <div className = "textileImageContainer">
                        <img src = {anadoludan2} className = "productImage" alt = "a ceramic image"/>
                        <img src = {anadoludan7} className = "productImage" alt = "a ceramic image"/>
                        <img src = {anadoludan5} className = "productImage" alt = "a ceramic image"/>
                    </div>
                </div>

                <div className = "textileImages">
                    <div className = "textileImageContainer">
                        <img src = {anadoludan9} className = "productImage" alt = "a ceramic image"/>
                        <img src = {anadoludan3} className = "productImage" alt = "a ceramic image"/>
                        <img src = {anadoludan4} className = "productImage" alt = "a ceramic image"/>
                    </div>
                </div>

                <div className = "textileImages">
                    <div className = "textileImageContainer">
                        <img src = {anadoludan6} className = "productImage" alt = "a ceramic image"/>
                        <img src = {anadoludan1} className = "productImage" alt = "a ceramic image"/>  
                        <img src = {anadoludan8} className = "productImage" alt = "a ceramic image"/>
                    </div>
                </div>

                <div className = "textileImages">
                    <div className = "textileImageContainer">
                        <img src = {tahta6} className = "productImage" alt = "an image of a wood product"/>
                        <img src = {tahta7} className = "productImage" alt = "an image of a wood product"/>
                        <img src = {tahta1} className = "productImage" alt = "an image of a wood product"/>
                    </div>
                </div>              
            </div>
        </div>
        </>
      )
}

export default Anadoludan