import React from 'react';
import Cosmetic from '../../components/Home/Cosmetic/Cosmetic';
import Homes from '../../components/Home/Homes';
import Implantat from '../../components/Home/Implantat/Index';
import OffPage from '../../components/Home/Off/Index';
import Price from '../../components/Home/Price/Index'
import Top from '../../components/Home/Top/Index';
import Hands from '../../components/Home/Hand/Index'
import Practic from '../../components/Home/Practic/Index';
import Call from '../../components/Home/Call/Call';
import HomeDoctor from '../../components/Home/Home_doctor/Index';
export default function Home() {
    return (
        <div>
            <Homes />
            <Cosmetic />
            <HomeDoctor />
            <Implantat />
            <OffPage />
            <Price />
            <Top />
            <Hands />
            <Practic />
            <Call />
        </div>
    )
}
