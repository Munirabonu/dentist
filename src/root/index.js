import React from 'react'
import {NavbarPath} from '../utils/path'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Loading from '../components/Loading/Index.jsx'
const Navbar =React.lazy(()=>import('../components/Navbar'))
const Footer =React.lazy(()=>import('../components/Footer/Footer'))

export default function Root() {
    return (
        <React.Suspense fallback={<Loading />}>
        <Router>
        <Switch>
            {NavbarPath.map(({ id, path }) => (
                    <Route exact key={id} component={Navbar} path={path} />
            ))}
        </Switch>
        <Switch>
            {NavbarPath.map(({ id, path,Component }) => (
                <Route exact key={id} component={Component} path={path} />
            ))} 
            {/* <Route path="*" component={NotFound} /> */}
        </Switch>
        
        <Switch>
            {NavbarPath.map(({ id, path }) => (
                    <Route exact key={id} component={Footer} path={path} />
            ))}
        </Switch>
        </Router>
        </React.Suspense>
    )
}
