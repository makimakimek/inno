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
                                <a href = "PrintingPress">Matbaa</a>
                                <a href = "textile">Tekstil</a>
                                <a href = "glass">Cam</a>
                                <a href = "ceramic">Seramik</a>
                                <a href = "wood">Tahta</a>
                            </div>
                        </div>
            
                        <div className = "link"><a href = "contact" className = "whiteLink">İletişim</a></div>
                    </div>
                </div>
            </div>

            <div className = "pageTitle">
                İletişim
            </div>

            <form className = "contactForm" onSubmit = {handleSubmit}>
                <div className = "contactContainer">
                    <label>Adınız:
                        <input type = "text" name = "firstname" value = {inputs.firstname || ""} onChange={handleChange} />
                    </label>
      
                    <label>Soyadınız:
                        <input type = "text" name = "lastname" value={inputs.lastname || ""} onChange={handleChange} />
                    </label>
                </div>

                <div className = "contactContainer">
                    <label>E-Posta:
                        <input type = "text" name = "email" value = {inputs.email || ""} onChange={handleChange} />
                    </label>
      
                    <label>Telefon:
                        <input type = "number" name = "phone" value={inputs.phone || ""} onChange={handleChange} />
                    </label>
                </div>

                <div className = "contactContainerMessage">
                    <label>Mesajınız:
                        <input type = "text" className = "messageContainer" name = "message" value = {inputs.message || ""} onChange = {handleChange} />
                    </label>
                </div>
                

                <input type="submit" className = "submitButton" value = "Gönder"/>
            </form>

        </div>
        </>
      )
}

export default Contact