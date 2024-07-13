import { useSelector } from 'react-redux'
import './HomePage.css'
import { DefaultHome } from './DefaultHome'
import { BuyerHome } from './BuyerHome'
import { FarmerHome } from './FarmerHome'
import { Navbar } from '../../components/Navbar'


export const HomePage = () => {

    const persona = useSelector((state: any) => state.auth.persona)
    const isLoggedIn = useSelector((state:any) => state.auth.isLoggedIn)

    return (
        <div>
            <Navbar />
          {isLoggedIn ? (
            persona === 'Farmer' ? (
                <FarmerHome />
            ) : persona === 'Buyer' ? (
                <BuyerHome />
            ): (
                <DefaultHome />
            )
          ): (
            <DefaultHome />
          )}
            
        </div>
    )
}