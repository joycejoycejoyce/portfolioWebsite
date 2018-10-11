import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Experience from './Experience'
import Contact from './Contact'

const Div = styled.div`
    background: ${({theme})=>theme.third};
`;
class Main extends Component{
    render(){
        return(
            <Div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/experience' component={Experience}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </Div>
        )
    }
}
export default Main;