import { useState } from 'react'
import placeholder from './assets/placeholder.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className = "page">
      <div className = "container1">
        <div className = "navigationContainer">
          <div className = "navigationLeft">
            <div>inno</div>
          </div>

          <div className = "navigationRight">
            <div className = "link">Anasayfa</div>
            <div className = "link">Hakkımızda</div>
            <div className = "link">Hizmetlerimiz</div>
            <div className = "link">Ürünlerimiz</div>
            <div className = "link">İletişim</div>
          </div>
        </div>

        <div className = "headerAndImageContainer">
          <div className = "headerAndImageLeft">
            <div className = "titleHeader">
              a short main header to explain purpose
            </div>
            
            <div className = "subHeader">
              a sub-header - a bit more detail but still should be short
            </div>

            <div className = "callToAction">
              <button id = "callToActionButton">Bize Ulaşın</button>
            </div>
          </div>

          <div className = "headerAndImageRight">
            <img src = {placeholder} className = "container1Image" alt="placeholder for now"/>
          </div>
        </div>
      </div>

      <div className = "container2">
        
      </div>
    </div>
    </>
  )
}

export default App