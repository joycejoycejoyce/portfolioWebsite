import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Experience from './Experience'
import Contact from './Contact'

class Main extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/experience' component={Experience}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </div>
        )
    }
}
export default Main;