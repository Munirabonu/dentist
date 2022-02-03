import React from 'react'
const Home =React.lazy(()=>import('../page/Home/Home.jsx'))
const Blog =React.lazy(()=>import('../page/Blog/Blog'))
const  Doctors=React.lazy(()=>import('../page/Doctors/Doctors.jsx'))
const Servies =React.lazy(()=>import('../page/Servies/Servies.jsx'))
const Price =React.lazy(()=>import('../page/Price/Price.jsx'))
const Contacts =React.lazy(()=>import('../page/Contacts/Contacts.jsx'))

export const NavbarPath = [
    {
        id:1,
        path:'/',
        title:"Home",
        Component:Home,
    },
    {
        id:2,
        path:'/blog',
        title:"Blog",
        Component:Blog,
    },
    {
        id:3,
        path:'/doctors',
        title:"Doctors",
        Component:Doctors,
    },
    {
        id:4,
        path:'/servies',
        title:"Servies",
        Component:Servies,
    },
    {
        id:5,
        path:'/price',
        title:"Price",
        Component:Price,
    },
    {
        id:6,
        path:'/contacts',
        title:"Contacts",
        Component:Contacts,
    }
]