/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';
import './HomePage.css';
import { DefaultHome } from './DefaultHome';
import { BuyerHome } from './BuyerHome';
import { FarmerHome } from './FarmerHome';

export const HomePage = () => {
    // Get the persona from Redux store
    const persona = useSelector((state: any) => state.auth.persona);

    // Check persona and render corresponding component
    if (!persona) {
        // If persona is undefined, show DefaultHome
        return <DefaultHome />;
    }

    return (
        <div>
            {persona === "Farmer" ? (
                <FarmerHome />
            ) : persona === 'Buyer' ? (
                <BuyerHome />
            ) : (
                <DefaultHome /> // Fallback if persona doesn't match
            )}
        </div>
    );
};
