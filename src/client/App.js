import React, { Component } from 'react';
import Header from './Header'
import Main from './Main'


  class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}
export default App;