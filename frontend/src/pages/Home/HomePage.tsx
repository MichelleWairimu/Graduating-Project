/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux'
import './HomePage.css'
import { DefaultHome } from './DefaultHome'
import  {BuyerHome}  from './BuyerHome'
import { FarmerHome } from './FarmerHome'



export const HomePage = () => {

    const persona = useSelector((state: any) => state.auth.persona)
    const isLoggedIn = useSelector((state:any) => state.auth.isLoggedIn)

  if (!isLoggedIn) {
    return <DefaultHome/>
  }

  switch(persona){
    case 'Farmer':
        return <FarmerHome/>
    case 'Buyer': 
        return <BuyerHome/>
    default:
        return <DefaultHome/>
    }
}
