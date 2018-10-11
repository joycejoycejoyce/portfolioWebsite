import React, { Component } from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  padding-top: 0;
  padding-bottom: 0;
  background-color: ${({theme})=>theme.main};
  text-align: center;
`;

const SocialIconList = styled.ul`
  list-style: none;
  padding-top: 25px;
  margin:0;
`;

const SocialIcon = styled.li`
  display: inline;
`;

const FAIcon = styled.i`
    color: ${({theme})=>theme.second};
  &:hover {
    color: ${({theme})=>theme.fifth};
    transition: all .3s ease;
    transform: scale(1.1) translateY(-5px);
  }
`;

class Footer extends Component{
    render(){
        return(
            <FooterDiv>
            <div className="row social" style={{ margin: 0 }}>
              <div className="col-lg-12">
                <SocialIconList>
                  <SocialIcon><a href="mailto:joycezhou757@gmail.com" target="_blank"><FAIcon className="fa fa-envelope fa-fw fa-2x" /></a></SocialIcon>
                  <SocialIcon><a href="https://www.linkedin.com/in/joyce-zhou-7065b0152/" target="_blank"><FAIcon className="fab fa-linkedin-in fa-fw fa-2x" /></a></SocialIcon>
                  <SocialIcon><a href="https://github.com/joycejoycejoyce/portfolioWebsite" target="_blank"><FAIcon className="fab fa-github fa-fw fa-2x" /></a></SocialIcon>
                </SocialIconList>
              </div>
            </div>
            <div className="row" id="copyright" style={{ margin: 0 }}>
              <div className="col-lg-12">
                <p className="small">© Joyce Zhou</p>
              </div>
            </div>
      </FooterDiv>
        )
    }
}
export default Footer;