import React from 'react'
import Doctor from '../../components/Doctor/Doctor'
import Doctor_card from '../../components/Doctor/Doctor_card/Doctor_card'
import Work from '../../components/Doctor/Work_about/Work_About'
import Call from '../../components/Home/Call/Call'

export default function Doctors() {
    return (
        <div>
            <Doctor />
            <Doctor_card />
            <Work />
            <Call />

        </div>
    )
}

