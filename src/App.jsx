import { useState } from 'react'
import placeholder from './assets/placeholder.jpg'
import placeholder2 from './assets/placeholder2.png'
import './App.css'
import { Link } from "react-router-dom";

function App() {
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
            <div className = "emailInNavigation">info@innopromoo.com</div>
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
                    <Link to = "promotion">Promosyon</Link>
                    <Link to = "textile">Tekstil</Link>
                    <Link to = "anadoludan">Anadoludan</Link>
                  </div>
                  )
                }
              </div>
              
              <div>
                {selectedLanguage === 'english' && 
                (<div className = "dropdownContent">
                    <Link to = "promotion">Promotion</Link>
                    <Link to = "textile">Textile</Link>
                    <Link to = "anadoludan">Anatolian</Link>
                  </div>
                  )
                }
              </div>
                
            </div>
            
            <div className = "link">
              {selectedLanguage === 'turkish' && <Link to = "contact" className = "whiteLink">İletişim</Link>}
              {selectedLanguage === 'english' && <Link to = "contact" className = "whiteLink">Contact Us</Link>}
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

        <div className = "logoContainer">
          <div className = "textSection">
            <div className = "slashes">
              //
            </div>

            <div>
              {selectedLanguage === 'turkish' &&
                (<div className = "companyNameAndAlt">
                  <div className = "companyName">
                    innopromoo
                  </div>

                  <div className = "altName">
                    promosyon ve organizasyon
                  </div>
                </div>
              )
            }

              {selectedLanguage === 'english' &&
                (<div className = "companyNameAndAlt">
                  <div className = "companyName">
                    innopromoo
                  </div>

                  <div className = "altName">
                    promotion and organization
                  </div>
                </div>
                )
              }              
            </div>
          </div>
        </div>
      </div>
      
      <div className = "container2">
        <div className = "aboutContainer">
          <div className = "lineBefore"></div>
          <div className = "aboutTitle">
            {selectedLanguage === 'turkish' && <div>Hakkımızda</div>}
            {selectedLanguage === 'english' && <div>About Us</div>}
          </div>
          <div className = "lineAfter"></div>
        </div>

        <div className = "aboutParagraph">
          <div className = "innerParagraphContainer">
            {selectedLanguage === 'turkish' && <div>Bizler Şebnem Keskin ve Ayşegül Özata olarak uzun yıllar kurumsal firmalarda üst düzey yöneticilik yaptıktan sonra Innopromoo, Promosyon ve Organizasyon’u hayata geçirdik.</div>}
            {selectedLanguage === 'english' && <div>We, Şebnem Keskin and Ayşegül Özata, after years of serving as senior executives in corporate companies, established Innopromoo, Promotion and Organization.</div>}
          </div>

          <div className = "innerParagraphContainer">
            {selectedLanguage === 'turkish' && <div>Tasarlayan ile kullanan arasında köprü görevi anlayışımızla ürün geliştirme sürecini, hem
            yurtdışı, hem de yurtiçi, çözüm ortaklarımızla koordine ederek, müşterilerimize, en iyi
            promosyon ve pazarlama hizmeti sunuyoruz.</div>}
            {selectedLanguage === 'english' && <div>With our understanding that acts as a bridge between the designer and the user, we coordinate 
              the product development process both domestically and internationally with our solution partners, providing our customers with the best 
              promotion and marketing services.</div>}
          </div>

          <div className = "innerParagraphContainer">
            {selectedLanguage === 'turkish' && <div>Ülkemizin birçok bölgesinde özel üretilen tekstil, ahşap, cam ve seramikten yapılan otantik
            ürünlerin, yurt dışına tanıtımı, marka değerinin artırılması, pazarlanması ve ihracatı
            konusunda uzman kadromuz ile hizmet üretiyoruz.</div>}
            {selectedLanguage === 'english' && <div>We provide services with our expert team for the promotion, enhancement, marketing, and export of 
              authentic products made from textiles, wood, glass, and ceramics, specially produced in many regions of our country.</div>}
          </div>

          <div className = "innerParagraphContainer">
            {selectedLanguage === 'turkish' && <div>Ayrıca, müşterilerimizin özel ihtiyacı olan farklı promosyon ürünlerini analiz ederek,
            rekabetçi fiyatla ve optimum sürede temin ediyoruz.</div>}
            {selectedLanguage === 'english' && <div>Furthermore, we analyze various promotional products tailored to the specific needs of 
            our customers and procure them at competitive prices and within optimal timeframes.</div>}
          </div>
        </div>
      </div>

      <div className = "productsAndServicesContainer">
        <div className = "innerContainer">
          <div className = "lineBefore"></div>
          <div className = "productsAndServicesTitle">
            {selectedLanguage === 'turkish' && <div>Ürün ve Hizmetlerimiz</div>}
            {selectedLanguage === 'english' && <div>Products and Services</div>}
          </div>
          <div className = "lineAfter"></div>
        </div>

        <div className = "productsAndServicesParagraph">
          <div className = "innerParagraphContainer">
            {selectedLanguage === 'turkish' && <div>Öncelikle ülkemizin yerel kumaşlarını ilgili bölgelerden temin ediyoruz. Bu kumaşlar ile kendi tasarımımızı yapmak dışında müşterilerimizin bizden
            talep ettiği tasarımları da üretiyoruz. Otel ve Restoranların tekstil ihtiyaçlarını, talep ettikleri şekilde, üretiyor, istenirse firma logoları ile 
            bu ürünleri kişiselleştiriyoruz. Otel ve restoranlar ile ilgili ürün yelpazemizde peçete, masa örtüsü, nevresim takımları, kırlentler ön planda yer 
            alıyor. Ayrıca, özel döşemelik kumaşların, tül ve perdelerin tedarik ve uygulamalarını da sağlıyoruz. Promosyon ürünlerinde kurumsal firmalarımızın 
            ihtiyacı olan seramik, cam, ahşap ve kırtasiye ürünlerini de temin ediyoruz.</div>}
            {selectedLanguage === 'english' && <div>Firstly, we source local fabrics from regions of our country. In addition to creating our own design with these fabrics, we also produce designs 
            requested by our customers. We manufacture textile products for hotels and restaurants according to their specifications and personalize these products with company logos if desired. 
            Our range of products for hotels and restaurants prominently includes napkins, tablecloths, bedding sets, and cushions. Furthermore, we also provide the supply and installation of special 
            upholstery fabrics, curtains, and draperies. In terms of promotional products, we also supply ceramic, glass, wood, and stationery items needed by our corporate clients.</div>}
          </div>
        </div>
      </div>

      <div className = "howWeWork">
        <div className = "innerContainer">
          <div className = "lineBefore"></div>
          <div className = "howWeWorkTitle">
            {selectedLanguage === 'turkish' && <div>Nasıl Çalışıyoruz</div>}
            {selectedLanguage === 'english' && <div>How We Work</div>}
          </div>
          <div className = "lineAfter"></div>
        </div>

        <div className = "howWeWorkParagraph">
          <div className = "innerParagraphContainer">
            {selectedLanguage === 'turkish' && <div>Müşteri odaklı yaklaşımımız ve proje yönetimindeki kapsamlı deneyimimiz ile iş
            ortaklarımıza hızlı ve etkin çözümler sunuyoruz. Çalışma yöntemimizi şekilde özetleyebiliriz:</div>}
            {selectedLanguage === 'english' && <div>With our customer-focused approach and extensive experience in project management, 
              we provide our business partners with fast and effective solutions. We can summarize our working method as follows:</div>}
          </div>

          <div className = "innerParagraphContainer2">
            {selectedLanguage === 'turkish' && <div>- Müşteri ile etkin iletişim kurarak kendilerinin talep ve beklentileri anlaşılır,</div>}
            {selectedLanguage === 'english' && <div>- Effective communication with the customer to understand their needs and expectations clearly,</div>}
          </div>

          <div className = "innerParagraphContainer2">
            {selectedLanguage === 'turkish' && <div>- Beklentiler doğrultusunda firma kültürü ve hitap ettiği müşteri kesimi analiz edilerek
            stratejik ortaklarımız ile ön numuneler hazırlanır,</div>}
            {selectedLanguage === 'english' && <div>- Analyzing the company culture and the target customer segment in line with expectations, 
            we prepare initial samples in collaboration with our strategic partners,</div>}
          </div>

          <div className = "innerParagraphContainer2">
            {selectedLanguage === 'turkish' && <div>- Müşteri ile devam eden görüşmeler sonucu fiyat, kalite, tasarım ve teslim tarihinde
            mutabık kalınır,</div>}
            {selectedLanguage === 'english' && <div>- By continuing our discussions with the customer, we reach a mutual agreement on price, quality, 
            design, and delivery date,</div>}
          </div>

          <div className = "innerParagraphContainer2">
            {selectedLanguage === 'turkish' && <div>- Uzman tedarikçi portföyümüzce seri üretim sürecine geçilir,</div>}
            {selectedLanguage === 'english' && <div>- With our expert supplier portfolio, we transition to the mass production process,</div>}
          </div>

          <div className = "innerParagraphContainer2">
            {selectedLanguage === 'turkish' && <div>- Kaliteden ödün vermeyerek ve terminlere uygun bir şekilde son ürünler
            müşterilerimize teslim edilir.</div>}
            {selectedLanguage === 'english' && <div>- Maintaining quality standards and adhering to deadlines, the final products are delivered to our customers.</div>}
          </div>
        </div>
      </div>

      <div className = "contactInfo">
        <div className = "innerContainer">
          <div className = "lineBefore"></div>
          <div className = "contactTitle">
            {selectedLanguage === 'turkish' && <div>İletişim Bilgileri</div>}
            {selectedLanguage === 'english' && <div>Contact Us</div>}
          </div>
          <div className = "lineAfter"></div>
        </div>

        <div className = "underContactSection">
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
      </div>
    </div>
    </>
  )
}

export default App