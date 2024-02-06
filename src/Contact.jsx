import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";

function Contact() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

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
                                <Link to = "/promotion">Promosyon</Link>
                                <Link to = "/textile">Tekstil</Link>
                                <Link to = "/anadoludan">Anadoludan</Link>
                            </div>
                        </div>
            
                        <div className = "link"><Link to = "/contact" className = "whiteLink">İletişim</Link></div>
                    </div>
                </div>

                <div className = "logoContainer">
                    <div className = "textSection">
                        <div className = "slashes">
                            //
                        </div>

                        <div className = "companyNameAndAlt">
                            <div className = "companyName">
                                inno
                            </div>

                            <div className = "altName">
                                Promosyon ve Organizasyon
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "contactPageTitle">
                İletişim Bilgileri
            </div>

            <div className = "contactParagraph">
                
            </div>
            
            <div className = "underContactSection">
                <div className = "emailTitleSection">
                    Email Adresimiz: info@innopromoo.com
                </div>

                <div className = "phoneNumberSection">
                    Telefon Numaramız:
                </div>
            </div>
        </div>
        </>
      )
}

export default Contact