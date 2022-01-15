import Home from '../page/Home/Home.jsx'
import Blog from '../page/Blog/Blog'
import Doctors from '../page/Doctors/Doctors.jsx'
import Servies from '../page/Servies/Servies.jsx'
import Price from '../page/Price/Price.jsx'
import Contacts from '../page/Contacts/Contacts.jsx'

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