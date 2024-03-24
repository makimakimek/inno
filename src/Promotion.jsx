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
    const [selectedLanguage, setSelectedLanguage] = useState('turkish');

    const handleOptionChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <>
        <div className = "page">
            <div className = "container1">
                <div className = "navigationContainer">
                    <div className = "navigationLeft">
                        <div>innopromoo</div>
                    </div>

                    <div className = "navigationRight">
                        <div className = "link">
                            {selectedLanguage === 'turkish' && <a href = "/" className = "whiteLink">Anasayfa</a>}
                            {selectedLanguage === 'english' && <a href = "/" className = "whiteLink">Home</a>}
                        </div>
            
                        <div className = "dropdown">
                            <div className = "products">
                                {selectedLanguage === 'turkish' && <a href = "/" className = "whiteLink">Ürünlerimiz</a>}
                                {selectedLanguage === 'english' && <a href = "/" className = "whiteLink">Products</a>}
                            </div>

                            <div>
                                {selectedLanguage === 'turkish' && 
                                (<div className = "dropdownContent">
                                    <Link to = "/promotion">Promosyon</Link>
                                    <Link to = "/textile">Tekstil</Link>
                                    <Link to = "/anadoludan">Anadoludan</Link>
                                </div>
                                )
                                }
                            </div>
                            
                            <div>
                                {selectedLanguage === 'english' && 
                                (<div className = "dropdownContent">
                                    <Link to = "/promotion">Promotion</Link>
                                    <Link to = "/textile">Textile</Link>
                                    <Link to = "/anadoludan">Anatolian</Link>
                                </div>
                                )
                                }
                            </div>
                        </div>
            
                        <div className = "link">
                            {selectedLanguage === 'turkish' && <Link to = "/contact" className = "whiteLink">İletişim</Link>}
                            {selectedLanguage === 'english' && <Link to = "/contact" className = "whiteLink">Contact Us</Link>}
                        </div>

                        <div className = "languageOptions">
                            <div class = "switch">
                                <input id = "switch-t" name = "language" type = "radio" value = "turkish" className = "switch-input" checked = {selectedLanguage === 'turkish'} onChange = {handleOptionChange}/>
                                <label for = "switch-t" className = "switch-label switch-label-t">TR</label>

                                <div>|</div>

                                <input id = "switch-e" name = "language" type = "radio" value = "english" className = "switch-input" checked = {selectedLanguage === 'english'} onChange = {handleOptionChange}/>
                                <label for = "switch-e" className = "switch-label switch-label-e">EN</label>

                                <div class = "switch-selector"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "pageTitle">
                {selectedLanguage === 'turkish' && <div>Promosyon Ürünlerimiz</div>}
                {selectedLanguage === 'english' && <div>Promotional Products</div>}
            </div>

            <div className = "promotionParagraph">
                <div className = "innerParagraphContainer3">
                    {selectedLanguage === 'turkish' && <div>Promosyon ürünlerinin müşteri beklentilerine uygun şekilde temini, tasarımı ve
                    sunumu ile ilgili tüm süreçleri firmamızca gerçekleştirmekteyiz. Ürün yelpazemizde
                    matbaa ve kırtasiye ürünleri, seramik, cam ve ahşap ürünleri yer alıyor.</div>}
                    {selectedLanguage === 'english' && <div>We handle all processes related to the acquisition, design, and presentation of 
                        promotional products in line with customer expectations. Our product range includes printing and stationery items, ceramics, 
                        glass, and wood products.We handle all processes related to the acquisition, design, and presentation of promotional products in 
                        line with customer expectations. Our product range includes printing and stationery items, ceramics, glass, and wood products.</div>}
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