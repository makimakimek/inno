import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
      </div>
    </div>
    </>
  )
}

export default App