import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";
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
import tekstil5 from './assets/tekstil5.jpg'
import tekstil6 from './assets/tekstil6.jpg'
import tekstil7 from './assets/tekstil7.jpg'
import tekstil8 from './assets/tekstil8.jpg'
import tekstil9 from './assets/tekstil9.jpg'
import tekstil10 from './assets/tekstil10.jpg'


function Textile() {
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
                Tekstil Ürünlerimiz
            </div>

            <div className = "textileParagraph">
                <div className = "innerParagraphContainer">
                    Otel ve restoranların tekstil ürünlerinin temini, projelendirmesi ve firma kalite
                    beklentilerine uygun şekilde üretilmesi sağlamaktayız. Ürün yelpazemizde perde,
                    nevresim takımları, peçete, masa örtüleri ve yastıklar ön planda yer almaktadır.
                </div>
            </div>

            <div className = "productImageFlexboxContainer">
                <div className = "textileImages">
                    <div className = "textileImageContainer">
                        <img src = {tekstil1} className = "productImage" alt = "an image of a textile product"/>
                        <img src = {tekstil4} className = "productImage" alt = "an image of a textile product"/>
                        <img src = {tekstil2} className = "productImage" alt = "an image of a textile product"/>
                        
                    </div>

                    <div className = "textileImageContainer">
                        <img src = {tekstil3} className = "productImage" alt = "an image of a textile product"/>
                        <img src = {tekstil5} className = "productImage" alt = "an image of a textile product"/>
                        <img src = {tekstil6} className = "productImage" alt = "an image of a textile product"/>
                        
                        
                    </div>

                    <div className = "textileImageContainer">
                        <img src = {tekstil9} className = "productImage" alt = "an image of a textile product"/>
                        <img src = {tekstil10} className = "productImage" alt = "an image of a textile product"/>
                        <img src = {tekstil7} className = "productImage" alt = "an image of a textile product"/>
                    </div>

                    <div className = "textileImageContainer">
                        <img src = {tekstil8} className = "productImage" alt = "an image of a textile product"/>
                    </div>
                </div>         
            </div>
        </div>
        </>
      )
}

export default Textile