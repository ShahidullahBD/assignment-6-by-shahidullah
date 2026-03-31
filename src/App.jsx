import { useState } from 'react'
import './App.css'
import BannerContent from './Components/Banner/BannerContent'
import BannerImage from './Components/Banner/BannerImage'
import FooterBottom from './Components/Footer/FooterBottom'
import FooterTop from './Components/Footer/FooterTop'
import GetStart from './Components/GetStartSection/GetStart'
import MainSectionCart from './Components/MainSection/MainSectionCart'
import MainSectionHeader from './Components/MainSection/MainSectionHeader'
import Navbar from './Components/Navbar/Navbar'
import PricingSection from './Components/PricingSection/PricingSection'
import StateSection from './Components/State/StateSection'


const getPlans = async ()=>{
  const res = await fetch('/data.json')
  return res.json()
}

const plansPromise = getPlans();

function App() { 

  const [purchesCarts, setPurchesCarts] = useState([]);
  
  

  return (
    <>
    <Navbar purchesCarts={purchesCarts}/>
    <hr />
      <div className='flex justify-center items-center my-20 gap-15'>
        <BannerContent/>
        <BannerImage/>
      </div>
      <StateSection/>
      <MainSectionHeader/>
      <MainSectionCart plansPromise={plansPromise} purchesCarts={purchesCarts} setPurchesCarts={setPurchesCarts}/>      
      <GetStart/>
      <PricingSection/>
      <FooterTop/>
      <FooterBottom/>
    </>
  )
}

export default App
