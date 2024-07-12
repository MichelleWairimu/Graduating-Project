import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Register, Login } from './pages/Authentication'
/* import { Navbar } from './components/Navbar' */
/* import { Footer } from './components/Footer' */
import { Landingpage } from './pages/landingpage/landingpage'
import { Orderpage } from './pages/orderpage/orderpage'
import { Addproduct } from './pages/addproduct/addproduct'



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
      <Route path='/register' element={ <Register />}/>
      <Route path='/login' element={ <Login />}/>
    </Routes>
    </div>
    </BrowserRouter>
   </div>
  )
}

export default App
