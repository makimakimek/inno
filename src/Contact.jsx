import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";

function Contact() {
    const [selectedLanguage, setSelectedLanguage] = useState('turkish');

    const handleOptionChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

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

            <div className = "contactPageTitle">
                {selectedLanguage === 'turkish' && <div>İletişim Bilgileri</div>}
                {selectedLanguage === 'english' && <div>Contact Information</div>}
            </div>

            <div className = "underContactSection2">
              <div className = "emailContainer">
                <div className = "emailTitleSection">
                  {selectedLanguage === 'turkish' && <div>Email Adresimiz:</div>}
                  {selectedLanguage === 'english' && <div>Our Email Address:</div>}
                </div>

                <div className = "email">
                    {selectedLanguage === 'turkish' && <div>info@innopromoo.com</div>}
                    {selectedLanguage === 'english' && <div>info@innopromoo.com</div>}
                </div>
              </div>

              <div className = "phoneContainer">
                <div className = "phoneNumberSection">
                    {selectedLanguage === 'turkish' && <div>Telefon Numaramız:</div>}
                    {selectedLanguage === 'english' && <div>Our Phone Number:</div>}                  
                </div>

                <div className = "number">
                    {selectedLanguage === 'turkish' && <div>+90 (532) 139 91 42</div>}
                    {selectedLanguage === 'english' && <div>+90 (532) 139 91 42</div>}
                </div>

                <div className = "number">
                    {selectedLanguage === 'turkish' && <div>+90 (530) 641 60 79</div>}
                    {selectedLanguage === 'english' && <div>+90 (530) 641 60 79</div>}
                </div>
              </div>
          </div>

                <form className = "contactForm" onSubmit = {handleSubmit}>
                    <div className = "contactContainer">
                        <label>
                            {selectedLanguage === 'turkish' && <div>Firma:</div>}
                            {selectedLanguage === 'english' && <div>Company:</div>}
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
                            {selectedLanguage === 'turkish' && <div>Adınız:</div>}
                            {selectedLanguage === 'english' && <div>First Name:</div>}
                            <input
                                className = "altFormContainer"
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            {selectedLanguage === 'turkish' && <div>Soyadınız:</div>}
                            {selectedLanguage === 'english' && <div>Last Name:</div>}
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
                            {selectedLanguage === 'turkish' && <div>E-posta:</div>}
                            {selectedLanguage === 'english' && <div>Email Address:</div>}
                            <input
                                className = "altFormContainer"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            {selectedLanguage === 'turkish' && <div>Telefon:</div>}
                            {selectedLanguage === 'english' && <div>Phone Number:</div>}
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
                            {selectedLanguage === 'turkish' && <div>Konu:</div>}
                            {selectedLanguage === 'english' && <div>Subject:</div>}
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
                        <label> {selectedLanguage === 'turkish' && <div>Mesaj:</div>}
                                {selectedLanguage === 'english' && <div>Message:</div>}
                            <textarea className = "messageContainer" name="message" value={formData.message} onChange={handleChange}/>
                        </label>
                    </div>
                    
                    <button className = "submitButton" type="submit">
                        {selectedLanguage === 'turkish' && <div>Gönder</div>}
                        {selectedLanguage === 'english' && <div>Submit</div>}
                    </button>
                </form>
            </div>
        </>
      )
}

export default Contact