import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const Div =styled.div`
    padding: 1% 17% 3% 17%;
`;
const Textarea = styled.textarea`
    border-radius:5%;
    background: transparent;
    width:100%;
`;
class Contact extends Component{
    constructor() {
        super();
        this.state = {
          name: '',
          email:'',
          content:'',
        };
      }
    render(){
        return(
            <Div>
                <form action="https://formspree.io/sophiaciocca@gmail.com" method="POST">
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={6}>
                        <span>Name:</span>
                        <TextField
                            fullWidth
                            id="outlined-full-width"
                            class="name"
                            value={this.state.name}
                            variant="outlined"
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <span>Email:</span>
                    <TextField
                            fullWidth
                            id="outlined-full-width"
                            class="email"
                            value={this.state.email}
                            variant="outlined"
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Textarea 
                        id="content"
                        rows="10" 
                        cols="50" 
                        maxLength={300}
                        value={this.state.content}                      
                        >
                    </Textarea>
                    </Grid>
                    <Grid item xs={12}>
                    <input type="submit" value="submit"/>
                    </Grid>
                    </Grid>
                </form>
                
            </Div>
        )
    }
}
export default Contact;