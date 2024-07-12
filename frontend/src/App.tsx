import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Landingpage } from './pages/landingpage'
import { Addproduct } from './pages/addproduct'
import { Orderpage } from './pages/orderpage'
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
      <Route index element={<Landingpage/>}/>
      <Route path="/order" element={<Orderpage/>}/>
      <Route path="/addproduct" element={<Addproduct/>}/>
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
