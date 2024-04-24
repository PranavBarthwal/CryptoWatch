import './App.css'
import DashboardPage from './pages/DashboardPage'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/*<Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
