import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Header extends Component{
render(){
    return(
        <div>
               <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/experience'>Experience</Link></li>
      </ul>
    </nav> 
        </div>
    )
}
}

export default Header;
