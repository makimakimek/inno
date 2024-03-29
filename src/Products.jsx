import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";
import placeholder from './assets/placeholder.jpg'

function Products() {
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
                Ürünlerimiz
            </div>

            <div className = "productImageFlexboxContainer">
                <div className = "imageFlexboxContainer1">
                    <img src = {placeholder} className = "productImage" alt = "a placeholder image for now"/>
                    <img src = {placeholder} className = "productImage" alt = "a placeholder image for now"/>
                    <img src = {placeholder} className = "productImage" alt = "a placeholder image for now"/>
                    <img src = {placeholder} className = "productImage" alt = "a placeholder image for now"/>
                </div>

                <div className = "imageFlexboxContainer2">
                    <img src = {placeholder} className = "productImage" alt = "a placeholder image for now"/>
                    <img src = {placeholder} className = "productImage" alt = "a placeholder image for now"/>
                    <img src = {placeholder} className = "productImage" alt = "a placeholder image for now"/>
                    <img src = {placeholder} className = "productImage" alt = "a placeholder image for now"/>
                </div>

                <div className = "imageFlexboxContainer3">
                    <img src = {placeholder} className = "productImage" alt = "a placeholder image for now"/>
                    <img src = {placeholder} className = "productImage" alt = "a placeholder image for now"/>
                    <img src = {placeholder} className = "productImage" alt = "a placeholder image for now"/>
                    <img src = {placeholder} className = "productImage" alt = "a placeholder image for now"/>
                </div>

                <div className = "imageFlexboxContainer4">
                    <img src = {placeholder} className = "productImage" alt = "a placeholder image for now"/>
                    <img src = {placeholder} className = "productImage" alt = "a placeholder image for now"/>
                    <img src = {placeholder} className = "productImage" alt = "a placeholder image for now"/>
                    <img src = {placeholder} className = "productImage" alt = "a placeholder image for now"/>
                </div>
            </div>
        </div>
        </>
      )
}

export default Products