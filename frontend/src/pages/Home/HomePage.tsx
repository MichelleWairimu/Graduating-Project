/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux'
import './HomePage.css'
import { DefaultHome } from './DefaultHome'
import  {BuyerHome}  from './BuyerHome'
import { FarmerHome } from './FarmerHome'



export const HomePage = () => {

    const persona = useSelector((state: any) => state.auth.persona)

    return (

        <>
        <div>
             <div>
            {persona === "Farmer" ? (
                < FarmerHome/>
            ) : persona === 'Buyer' ? (
                < BuyerHome/>
            ): ( <DefaultHome/> )}
        </div>
        </div>
        </>

    )
}