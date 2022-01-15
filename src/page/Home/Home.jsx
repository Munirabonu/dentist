import React from 'react';
import Cosmetic from '../../components/Home/Cosmetic/Cosmetic';
import Homes from '../../components/Home/Homes';
import Home_doctor from '../../components/Home/Home_doctor/Index';
// import 'home.css';/
export default function Home() {
    return (
        <div>
            <Homes />
            <Cosmetic />
            <Home_doctor />
            
        </div>
    )
}
