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
            Firma kurucuları Şebnem Keskin ve Ayşegül Özata uzun yıllar kurumsal firmalarda üst düzey yöneticilik yaptıktan sonra İnno Promosyon Organizasyonu kurdular. 
          </div>

          <div className = "innerParagraphContainer">
            Tasarlayan ile kullanan arasında köprü görevi anlayışımızlaö ürün geliştirme sürecini, hem yurtdışı, hem de yurtiçi, çözüm ortaklarımızla koordine ederek, 
            müşterilerimize, en iyi promosyon ve pazarlama hizmeti sunuyoruz. 
          </div>

          <div className = "innerParagraphContainer">
            Ülkemizin birçok bölgesinde özel üretilen tekstil, ahşap, cam ve seramikten yapılan otantik 
            ürünlerin, yurt dışına tanıtımı, marka değerinin artırılması, pazarlanması ve ihracatı konusunda uzman kadromuz ile hizmet üretiyoruz. 
          </div>

          <div className = "innerParagraphContainer">
            Ayrıca, müşterilerimizin özel ihtiyacı olan farklı promosyon ürünlerini analiz ederek, rekabetçi fiyatla ve optimum sürede temin ediyoruz.
          </div>
        </div>
      </div>

      <div className = "productsAndServicesContainer">
        <div className = "innerContainer">
          <div className = "lineBefore"></div>
          <div className = "productsAndServicesTitle">
            Ürün ve Hizmetlerimiz
          </div>
          <div className = "lineAfter"></div>
        </div>

        <div className = "productsAndServicesParagraph">
          <div className = "innerParagraphContainer">
            Öncelikle ülkemizin yerel kumaşlarını ilgili bölgelerden temin ediyoruz. Bu kumaşlar ile kendi tasarımımızı yapmak dışında müşterilerimizin bizden
            talep ettiği tasarımları da üretiyoruz. Otel ve Restoranların tekstil ihtiyaçlarını, talep ettikleri şekilde, üretiyor, istenirse firma logoları ile 
            bu ürünleri kişiselleştiriyoruz. Otel ve restoranlar ile ilgili ürün yelpazemizde peçete, masa örtüsü, nevresim takımları, kırlentler ön planda yer 
            alıyor. Ayrıca, özel döşemelik kumaşların, tül ve perdelerin tedarik ve uygulamalarını da sağlıyoruz. Promosyon ürünlerinde kurumsal firmalarımızın 
            ihtiyacı olan seramik, cam, ahşap ve kırtasiye ürünlerini de temin ediyoruz.
          </div>
        </div>
      </div>

      <div className = "howWeWork">
        <div className = "innerContainer">
          <div className = "lineBefore"></div>
          <div className = "howWeWorkTitle">
            Nasıl Çalışıyoruz
          </div>
          <div className = "lineAfter"></div>
        </div>

        <div className = "howWeWorkParagraph">
          <div className = "innerParagraphContainer">
            Müşterilerimizin gereksinimleri ve istekleri her çalışma adımımızın odağında yer alıyor. Proje yönetimindeki kapsamlı deneyimimiz, hızlı bir şekilde 
            çözüm bulmamızı ve böylece sonuç elde etmemizi sağlıyor. Başlangıç olarak, siz müşterimizin istekleri var: Amacımız, müşterimizin isteğine uygun çözümü, 
            mümkün olan en iyi şekilde gerçekleştirmektir. Bu nedenle bir sonraki adımımız tasarımlar sunmaktır. Yaptığımız tasarımlar, projenin daha da geliştirilmesi 
            için sağlam bir temel oluşturuyor. Daha sonra alternatif çözümler sunuyoruz. Müşterilerimiz ile birlikte en iyi çözümü buluncaya kadar çalışıyoruz. Ürettiğimiz 
            en iyi ürünü teknik ve ekonomik analiz edilmesi ile süreci devam ettiriyoruz. Son aşama olarak, uzman tedarikçilerimize, seri üretim yaptırıyor ve ürünleri 
            müşterilerimize teslim ediyoruz.
          </div>
        </div>
      </div>

      <div className = "contactInfo">
        <div className = "innerContainer">
          <div className = "lineBefore"></div>
          <div className = "contactTitle">
            İletişim Bilgileri
          </div>
          <div className = "lineAfter"></div>
        </div>

        <div className = "underContactSection">
                <div className = "emailTitleSection">
                  Email Adresimiz: inno@innopromoo.com
                </div>

                <div className = "phoneNumberSection">
                  Telefon Numaramız: 539 876 55 55
                </div>
            </div>
      </div>
    </div>
    </>
  )
}

export default App