import { useState } from 'react'
import placeholder from './assets/placeholder.jpg'
import placeholder2 from './assets/placeholder2.png'
import './App.css'
import { Link } from "react-router-dom";

function App() {
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
              <div className = "whiteLink">Ürünlerimiz</div>
              <div className = "dropdownContent">
                <a href = "#"><Link to = "products">Matbaa</Link></a>
                <a href = "#"><Link to = "products">Tekstil</Link></a>
                <a href = "#"><Link to = "products">Product 3</Link></a>
              </div>
            </div>
            
            <div className = "link"><Link to = "contact" className = "whiteLink">İletişim</Link></div>
          </div>
        </div>

        <div className = "imageContainer">
          <img src = {placeholder2} className = "container1Image" alt = "a placeholder image for now"/>
        </div>
      </div>
      
      <div className = "container2">
        <div className = "aboutContainer">
          <div className = "lineBefore"></div>
          <div className = "aboutTitle">
            Hakkımızda
          </div>
          <div className = "lineAfter"></div>
        </div>

        <div className = "aboutParagraph">
          <div className = "innerParagraphContainer">
          Buraya inno hakkinda bir paragraf gelecek. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
          qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App