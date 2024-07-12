import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Register, Login } from './pages/Authentication'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'



function App() {
  return (
   <div className='App'>
    <BrowserRouter>
    <Navbar />
    <div>
    <Routes>
      <Route path='/home' element={ <HomePage />}/>
      <Route path='/register' element={ <Register />}/>
      <Route path='/login' element={ <Login />}/>
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
   </div>
  )
}

export default App
