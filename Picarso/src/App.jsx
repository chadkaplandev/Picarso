import Header from "./components/Header"
import Hero from "./components/Hero"
import Carousel from "./components/Carousel"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import './index.css'

function App() {
  const handleNavClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="font-sans">
      <Header onNavClick={handleNavClick} />
      <Hero />
      <Carousel />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
