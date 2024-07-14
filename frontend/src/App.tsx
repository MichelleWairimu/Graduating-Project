import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { HomePage } from './pages/Home/HomePage'
import { Register, Login } from './pages/Authentication'
import { Footer } from './components/Footer' 
import { Landingpage } from './pages/landingpage/landingpage'
import { Orderpage } from './pages/orderpage/orderpage'
import { Addproduct } from './pages/addproduct/addproduct'
import { Contact } from './pages/ContactPage/Contact'
import { CropCard } from './pages/cards/Cards'
import {BuyerHome} from './pages/Home/BuyerHome'
import { Buy } from './pages/Home/buy'
import { SellPage } from './pages/sell/sell'
import { ProductProvider } from './pages/context/productcontext'
import { MyList } from './mylist/mylistpage'



function App() {
  return (
   <div className='App'>
    <ProductProvider>
    <Router>
    <div>
    <Routes>
      <Route index element={<Landingpage/>}/>
      <Route path="/order" element={<Orderpage/>}/>
      <Route path="/addproduct" element={<Addproduct/>}/>
      <Route path='/home' element={ <HomePage />}/>
      <Route path='/contact' element={ <Contact />}/>
      <Route path='/register' element={ <Register />}/>
      <Route path='/login' element={ <Login />}/>
      <Route path='/cards' element={ <CropCard/>}/>
      <Route path="/buyerhome" element={<BuyerHome />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/sell" element={<SellPage />} />
      <Route path="/list" element={<MyList />} />

    </Routes>
    </div>
    <Footer />
    </Router>
    </ProductProvider>
   </div>
  )
}

export default App
