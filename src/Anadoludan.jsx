import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";
import yastik1 from './assets/yastik1.jpg';
import yastik2 from './assets/yastik2.jpg';
import yastik3 from './assets/yastik3.jpg';
import yastik4 from './assets/yastik4.jpg';
import yastik5 from './assets/yastik5.jpg';
import yastik6 from './assets/yastik6.jpg';
import cam1 from './assets/cam1.png';
import cam2 from './assets/cam2.png';
import cam3 from './assets/cam3.jpg';
import tahta1 from './assets/tahta1.jpg';
import tahta2 from './assets/tahta2.jpg';
import tahta3 from './assets/tahta3.jpg';
import anadoludan1 from './assets/anadoludan1.jpg';
import anadoludan2 from './assets/anadoludan2.jpg';
import anadoludan3 from './assets/anadoludan3.jpg';
import anadoludan4 from './assets/anadoludan4.jpg';
import anadoludan5 from './assets/anadoludan5.jpg';
import anadoludan6 from './assets/anadoludan6.jpg';
import anadoludan7 from './assets/anadoludan7.jpg';
import anadoludan8 from './assets/anadoludan8.jpg';
import anadoludan9 from './assets/anadoludan9.PNG';
import nazar1 from './assets/nazar1.jpg';
import nazar2 from './assets/nazar2.jpg';
import nazar3 from './assets/nazar3.jpg';
import nazar4 from './assets/nazar4.jpg';
import nazar5 from './assets/nazar5.jpg';
import nazar6 from './assets/nazar6.jpg';

function Anadoludan() {
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
                            <div className = "switch">
                                <input id = "switch-t" type = "radio" value = "turkish" className = "switch-input" checked = {selectedLanguage === 'turkish'} onChange = {handleOptionChange}/>
                                <label htmlFor = "switch-t" className = "switch-label switch-label-t">TR</label>

                                <div>|</div>

                                <input id = "switch-e" type = "radio" value = "english" className = "switch-input" checked = {selectedLanguage === 'english'} onChange = {handleOptionChange}/>
                                <label htmlFor = "switch-e" className = "switch-label switch-label-e">EN</label>

                                <div className = "switch-selector"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "pageTitle">
                {selectedLanguage === 'turkish' && <div>Anadoludan Ürünlerimiz</div>}
                {selectedLanguage === 'english' && <div>Anatolian Products</div>}
            </div>

            <div className = "anadoludanParagraph">
                <div className = "innerParagraphContainer3">
                    {selectedLanguage === 'turkish' && <div>Ülkemizin çeşitli yörelerinden temin ettiğimiz zanaatkarlar tarafından özel olarak
                    üretilen ürünlerin satışını yapmaktayız. Bunlar içerisinde yerel tezgahlarda el
                    dokuması kumaşlardan (örn: Gaziantep bölgesinden Kutnu Kumaşı) üretilen tasarım
                    tekstil ürünleri, el işi seramik, ahşap ve cam ürünler bulunmaktadır.</div>}
                    {selectedLanguage === 'english' && <div>We sell products specially crafted by artisans sourced from various regions of our 
                    country. These include handmade textile products made from locally woven fabrics (e.g., Kutnu Fabric from the Gaziantep region), 
                    handcrafted ceramics, wood, and glass products.</div>}
                </div>
            </div>

            <div className = "productImageFlexboxContainer">
                <div className = "textileImages">
                    <div className = "textileImageContainer">
                        <img src = {yastik1} className = "productImage" alt = "an image of a pillow"/>
                        <img src = {yastik2} className = "productImage" alt = "an image of a pillow"/>
                        <img src = {yastik5} className = "productImage" alt = "an image of a pillow"/>
                    </div>
                </div>

                <div className = "textileImages">
                    <div className = "textileImageContainer">
                        <img src = {yastik6} className = "productImage" alt = "an image of a pillow"/>
                        <img src = {yastik4} className = "productImage" alt = "an image of a pillow"/>
                        <img src = {yastik3} className = "productImage" alt = "an image of a pillow"/>
                    </div>
                </div>

                <div className = "textileImages">
                    <div className = "textileImageContainer">
                        <img src = {tahta1} className = "productImage" alt = "an image of a wood product"/>
                        <img src = {tahta2} className = "productImage" alt = "an image of a wood product"/>
                        <img src = {tahta3} className = "productImage" alt = "an image of a wood product"/>
                    </div>
                </div>

                <div className = "textileImages">
                    <div className = "textileImageContainer">
                        <img src = {nazar1} className = "productImage" />
                        <img src = {nazar2} className = "productImage" />
                        <img src = {nazar3} className = "productImage" />
                    </div>
                </div>

                <div className = "textileImages">
                    <div className = "textileImageContainer">
                        <img src = {nazar4} className = "productImage" />
                        <img src = {nazar5} className = "productImage" />
                        <img src = {nazar6} className = "productImage" />
                    </div>
                </div>

                <div className = "textileImages">
                    <div className = "textileImageContainer">
                        <img src = {cam1} className = "productImage" alt = "an image of a carafe"/>
                        <img src = {cam2} className = "productImage" alt = "an image of a carafe"/>
                        <img src = {cam3} className = "productImage" alt = "an image of a carafe"/>
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
            </div>
        </div>
        </>
      )
}

export default Anadoludan