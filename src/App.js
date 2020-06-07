import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/layout/Footer'
import Nav from './components/layout/Nav'
import './App.css'

const App = () => (
  <Router>
    <React.Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </React.Fragment>
  </Router>
)

export default App
