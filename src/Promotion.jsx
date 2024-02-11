import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";
import placeholder from './assets/placeholder.jpg'
import kalem1 from './assets/kalem1.JPG'
import defter1 from './assets/defter1.JPG'
import defter2 from './assets/defter2.jpg'
import kupa1 from './assets/kupa1.JPG'
import kupa2 from './assets/kupa2.JPG'
import seramik3 from './assets/seramik3.jpg'
import cam3 from './assets/cam3.jpg'
import cam4 from './assets/cam4.jpg'
import tahta2 from './assets/tahta2.jpg'
import tahta3 from './assets/tahta3.jpg'
import tahta4 from './assets/tahta4.jpg'
import tahta5 from './assets/tahta5.jpg'
import tahta8 from './assets/tahta8.jpg'

function Promotion() {
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
                Promosyon Ürünlerimiz
            </div>

            <div className = "promotionParagraph">
                <div className = "innerParagraphContainer">
                    Promosyon ürünlerinin müşteri beklentilerine uygun şekilde temini, tasarımı ve
                    sunumu ile ilgili tüm süreçleri firmamızca gerçekleştirmekteyiz. Ürün yelpazemizde
                    matbaa ve kırtasiye ürünleri, seramik, cam ve ahşap ürünleri yer alıyor.
                </div>
            </div>

            <div className = "productImageFlexboxContainer">
                <div className = "promotionImages">
                    <div className = "promotionImageContainer">
                        <img src = {defter1} className = "productImage" alt = "an image of a notebook"/>
                        <img src = {defter2} className = "productImage" alt = "an image of a notebook"/>
                        <img src = {kalem1} className = "productImage" alt = "an image of a pen"/>
                        
                                            
                    </div>
                </div>

                <div className = "promotionImages">
                    <div className = "promotionImageContainer">
                        <img src = {kupa1} className = "productImage" alt = "an image of a mug"/>
                        <img src = {kupa2} className = "productImage" alt = "an image of a mug"/>
                        <img src = {seramik3} className = "productImage" alt = "an image of a mug"/>
                        
                    </div>
                </div>

                <div className = "promotionImages">
                    <div className = "promotionImageContainer">
                        <img src = {tahta4} className = "productImage" alt = "an image of a wood product"/>
                        
                        <img src = {cam3} className = "productImage" alt = "an image of a glass"/>
                        <img src = {cam4} className = "productImage" alt = "an image of a glass"/>
                        
                        
                    </div>
                </div>

                <div className = "promotionImages">
                    <div className = "promotionImageContainer">
                        <img src = {tahta3} className = "productImage" alt = "an image of a wood product"/>
                        <img src = {tahta5} className = "productImage" alt = "an image of a wood product"/>
                        <img src = {tahta2} className = "productImage" alt = "an image of a wood product"/>
                          
                    </div>
                </div>

                <div className = "promotionImages">
                    <div className = "promotionImageContainer">
                    <img src = {tahta8} className = "productImage" alt = "an image of a wood product"/> 
                    </div>
                </div>
            </div>
        </div>
        </>
      )
}

export default Promotion