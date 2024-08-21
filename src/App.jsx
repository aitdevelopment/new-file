import './App.css'

import About from "./section/about/About"
import Contact from "./section/contact/Contact"
import Footer from "./section/footer/Footer"
import Header from "./section/header/Header"
import Hero from "./section/hero/Hero"
import Portfolio from "./section/portfolio/Portfolio"
import Services from "./section/services/Services"

const App =()=>{
  return(
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App