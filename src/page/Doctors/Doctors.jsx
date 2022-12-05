import React from 'react'
import Doctor from '../../components/Doctor/Doctor'
import DoctorCard from '../../components/Doctor/Doctor_card/Doctor_card'
import Work from '../../components/Doctor/Work_about/Work_About'
import Call from '../../components/Home/Call/Call'

export default function Doctors() {
    return (
        <div>
            <Doctor />
            <DoctorCard />
            <Work />
            <Call />

        </div>
    )
}

