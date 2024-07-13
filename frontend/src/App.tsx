import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/Home/HomePage'
import { Register, Login } from './pages/Authentication'
import { Footer } from './components/Footer' 
import { Landingpage } from './pages/landingpage/landingpage'
import { Orderpage } from './pages/orderpage/orderpage'
import { Addproduct } from './pages/addproduct/addproduct'
import { Contact } from './pages/ContactPage/Contact'
import { Profilepage } from './components/Profilepage'



function App() {
  return (
   <div className='App'>
    <BrowserRouter>
    <div>
    <Routes>
      <Route index element={<Landingpage/>}/>
      <Route path="/order" element={<Orderpage/>}/>
      <Route path="/addproduct" element={<Addproduct/>}/>
      <Route path='/home' element={ <HomePage />}/>
      <Route path='/contact' element={ <Contact />}/>
      <Route path='/register' element={ <Register />}/>
      <Route path='/login' element={ <Login />}/>
      <Route path='/profile/:id' element={<Profilepage/>}/>
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
   </div>
  )
}

export default App
