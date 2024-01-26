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
                            </div>
                        </div>
            
                        <div className = "link"><a href = "contact" className = "whiteLink">İletişim</a></div>
                    </div>
                </div>
            </div>

            <div className = "pageTitle">
                İletişim
            </div>

            <form onSubmit = {handleSubmit}>
                <label>Enter your name:
                    <input type = "text" name = "username" value = {inputs.username || ""} onChange={handleChange} />
                </label>
      
                <label>Enter your age:
                    <input type = "number" name = "age" value={inputs.age || ""} onChange={handleChange} />
                </label>
            
                <input type="submit" />
            </form>

        </div>
        </>
      )
}

export default Contact