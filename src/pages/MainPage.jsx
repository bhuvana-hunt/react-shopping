import React ,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Collections from '../components/Collections'

import {Gents} from '../components/data.js'


const MainPage = () => {
  const [gentsFashion, setGentsFashion] = useState(Gents);
  return (
    <div>
        <Header/>
        <Banner/>
        <Collections gentsFashion={gentsFashion}/>
        <Footer/>
    </div>
  )
}

export default MainPage 