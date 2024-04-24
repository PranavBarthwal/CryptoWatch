import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Common/Header/Header'
import Footer from '../components/Common/Footer/Footer'
import MainComponent from '../components/LandingPage/MainComponent/MainComponent'

function Home() {
    return (
      <>
        <MainComponent/>
      </>
    )
}

export default Home
