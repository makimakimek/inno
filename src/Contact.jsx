import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";

function Contact() {
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
                        <div className = "link"><Link to = "/products" className = "whiteLink">Ürünlerimiz</Link></div>
                        <div className = "link"><Link to = "/contact" className = "whiteLink">İletişim</Link></div>
                    </div>
                </div>
            </div>
        </div>
        </>
      )
}

export default Contact