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
                {selectedLanguage === 'turkish' && <div>Tekstil Ürünlerimiz</div>}
                {selectedLanguage === 'english' && <div>Textile Products</div>}
            </div>

            <div className = "textileParagraph">
                <div className = "innerParagraphContainer3">
                    {selectedLanguage === 'turkish' && <div>Otel ve restoranların tekstil ürünlerinin temini, projelendirmesi ve firma kalite
                    beklentilerine uygun şekilde üretilmesi sağlamaktayız. Ürün yelpazemizde perde,
                    nevresim takımları, peçete, masa örtüleri ve yastıklar ön planda yer almaktadır.</div>}
                    {selectedLanguage === 'english' && <div>We ensure the acquisition, project planning, and production of textile products for 
                    hotels and restaurants are in line with the company's quality expectations. Our product range mainly includes curtains, 
                    bedding sets, napkins, tablecloths, and cushions.</div>}
                </div>
            </div>

            <div className = "productImageFlexboxContainer">
                <div className = "textileImages">
                    <div className = "textileImageContainer">
                        <img src = {tekstil1} className = "productImage" alt = "an image of a textile product"/>
                        <img src = {tekstil4} className = "productImage" alt = "an image of a textile product"/>
                        <img src = {tekstil2} className = "productImage" alt = "an image of a textile product"/>
                    </div>
                </div>

                <div className = "textileImages">
                    <div className = "textileImageContainer">
                        <img src = {tekstil3} className = "productImage" alt = "an image of a textile product"/>
                        <img src = {tekstil5} className = "productImage" alt = "an image of a textile product"/>
                        <img src = {tekstil6} className = "productImage" alt = "an image of a textile product"/>
                    </div>
                </div>

                <div className = "textileImages">
                    <div className = "textileImageContainer">
                        <img src = {tekstil9} className = "productImage" alt = "an image of a textile product"/>
                        <img src = {tekstil10} className = "productImage" alt = "an image of a textile product"/>
                        <img src = {tekstil7} className = "productImage" alt = "an image of a textile product"/>
                    </div>
                </div>
                
                <div className = "textileImages">
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