import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { merge } from 'lodash'

import Main from './components/Main'
import Asset from './components/Asset'
import Settle from './components/Settle'
import Portfolio from './components/Portfolio'
import Profile from './components/Profile'
import Nav from './components/Nav'
import Header from './components/Header'
import Wallet from './components/Wallet'
import Alerts from './components/Alerts'
import ErrorModal from './components/ErrorModal'
import Manage from './components/Manage'
import Admin from './components/Admin'
import BrowserClasses from './components/BrowserClasses'
// import API from './api'
import { findStake } from './utils'

import './App.scss'

class App extends Component {
  render () {
    return (
      <Router>
        <BrowserClasses>
          <Route path='' component={Nav} />
          <Switch>
            <Route path='/portfolio' exact component={Portfolio} />
            <Route path='/wallet' exact component={Wallet} />
            <Route path='/manage' exact component={Manage} />
            <Route path='/admin' exact component={Admin} />
            <Route component={Main} />
          </Switch>
          <Alerts />
          <ErrorModal />
        </BrowserClasses>
      </Router>
    )
    // return (
    //   <Router>
    //     <Route path='' component={Nav} />
    //     <div className='container-fluid'>
    //       <Route exact path='/' component={Main} />
    //       <Route exact path='/:username([$].*)' render = {
    //         props => {
    //           const {match} = props
    //           const [username, messageid] = match.params.username.split('/')
    //           match.params.username = username
    //           match.params.messageid = messageid
    //           return <Profile {...props} />
    //         }
    //       } />
    //       <Alerts />
    //       <ErrorModal />
    //     </div>
    //   </Router>
    // )
  }
}

export default App
