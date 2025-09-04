import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Rick from './pages/Rick/rick'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Abot/>} />
        <Route path='/Rick' element={<Rick/>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App