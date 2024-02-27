import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";

function Contact() {
    const [formData, setFormData] = useState({
        companyName: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePhoneInputChange = (e) => {
        const input = e.target.value;
    
        const numericInput = input.replace(/\D/g, '');
    
        setFormData((prevData) => ({
          ...prevData,
          phoneNumber: numericInput,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('https://formspree.io/f/xleqjqzj', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            console.log('Form submitted successfully!');

            setFormData({
                companyName: '',
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                subject: '',
                message: '',
              });
          } else {
            console.error('Failed to submit form.');
          }
        } catch (error) {
          console.error('Error:', error);
        }
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

            <div className = "contactPageTitle">
                İletişim Bilgileri
            </div>

            <div className = "underContactSection2">
              <div className = "emailContainer">
                <div className = "emailTitleSection">
                  Email Adresimiz:
                </div>

                <div className = "email">
                  info@innopromoo.com
                </div>
              </div>

              <div className = "phoneContainer">
                <div className = "phoneNumberSection">
                  Telefon Numaramız:
                </div>

                <div className = "number">
                  +90 (532) 139 91 42
                </div>

                <div className = "number">
                  +90 (530) 641 60 79
                </div>
              </div>
          </div>

                <form className = "contactForm" onSubmit = {handleSubmit}>
                    <div className = "contactContainer">
                        <label>
                            Firma:
                            <input
                                className = "altFormContainer2"
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className = "contactContainer">
                        <label>
                            Adınız:
                            <input
                                className = "altFormContainer"
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            Soyadınız:
                            <input
                                className = "altFormContainer"
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    
                    <div className = "contactContainer">
                        <label>
                            E-posta:
                            <input
                                className = "altFormContainer"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            Telefon:
                            <input
                                className = "altFormContainer"
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onInput={handlePhoneInputChange}
                            />
                        </label>
                    </div>

                    <div className = "contactContainer">
                        <label>
                            Konu:
                            <input
                                className = "altFormContainer2"
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className = "contactContainerMessage">
                        <label> Mesaj:
                            <textarea className = "messageContainer" name="message" value={formData.message} onChange={handleChange}/>
                        </label>
                    </div>
                    
                    <button className = "submitButton" type="submit">Gönder</button>
                </form>
            </div>
        </>
      )
}

export default Contact