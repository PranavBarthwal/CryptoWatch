import './App.css'
import Header from './components/Common/Header/Header'
import Footer from './components/Common/Footer/Footer'
import MainComponent from './components/LandingPage/MainComponent/MainComponent'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
