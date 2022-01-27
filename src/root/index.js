import React from 'react'
import {NavbarPath} from '../utils/path'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
export default function Root() {
    return (
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
    )
}
