import React, { Component } from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import styled, { ThemeProvider } from 'styled-components';

const themes = {
  'light': {
    // greenblue
    main: '#10E7DC',
    // dark blue
    second:'#0074E1',
    // blue 
    third: '#1B9CE5',
    // light blue
    forth:'#6CBAEE',
    // orange 
    fifth:'#F79E02',
  },
  'dark': {
    // light green 
    main: '#E7F2B6',
    // green 
    second:'#ABAD3F',
    // light pink 
    third: '#FFAEAA',
    // pink 
    forth:'#E25B6A',
    // purguri 
    fifth:'#651B0E',
  }
}

const Div = styled.div`
  color: white;
  
`;
  class App extends Component {
    constructor() {
      super();
      this.state = {
        name: 'React',
        theme: themes['light']
      };
    }
  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
      <Div>
        <Header/>
        <Main/>
        <Footer/>
      </Div>
      </ThemeProvider>
    );
  }
}
export default App;