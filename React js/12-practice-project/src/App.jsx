import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import landingData from './constants/landingData'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
 const {features,testimonials}=landingData

  return (
    <>
      <Header/>
      <Hero/>
      <Features features={features}/>
      <Testimonials testimonials={testimonials}/>
      <Pricing/>
      <Footer/>
    </>
  )
}

export default App
