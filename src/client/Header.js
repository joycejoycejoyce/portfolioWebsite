import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components';

import author from '../asset/author.png';

/* General */
const NavWrapper = styled.div`
    background: ${({theme})=>theme.main};
    color:  ${({theme})=>theme.second};
    text-align: center;
`;
/* Left and right */
const Side = styled.div`
    display: inline-block;
`
/*Center */
const Center = styled.div`
    display: inline-block;
`;
/* Head  */
const HeadWrapper = styled.div`
`;
/* Head Image */
const ImgWrapper = styled.div`
    width: 17vw;
    heigth:17vw;
    border-radius: 50%;
    overflow: hidden;
`;

const HeadImg = styled.img`
    width: 17vw;
    height: 17vw;
    transition: all 1s;
    &:hover{
        transform: scale(1.5);
    }
`;


const neonEffect = keyframes`
0%,
100% {
  text-shadow: 0 0 1vw ${({theme})=>theme.forth},
        0 0 3vw ${({theme})=>theme.forth}, 
        0 0 10vw ${({theme})=>theme.forth},
        0 0 10vw ${({theme})=>theme.forth}, 
        0 0 .4vw ${({theme})=>theme.third}, 
        .5vw .5vw .1vw ${({theme})=>theme.second};
  color: ${({theme})=>theme.fifth};
}
50% {
  text-shadow: 0 0 .5vw #800E0B, 
        0 0 1.5vw #800E0B,
         0 0 5vw #800E0B, 
         0 0 5vw #800E0B, 
         0 0 .2vw #800E0B,
          .5vw .5vw .1vw #40340A;
  color: ${({theme})=>theme.fifth};
}
`;

const HeadText = styled.h2`
    font-size: 2.0rem;
    color: white;
    animation: ${neonEffect} 2s linear infinite; 
    ${HeadWrapper}:hover &{
        animation: none;
        text-shadow: 0 0 1vw ${({theme})=>theme.forth}, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw ${({theme})=>theme.third}, .5vw .5vw .1vw ${({theme})=>theme.second};
        color: #FED128;
    }
`;
/* nav bar  */
const NavItem = styled(NavLink)`
  display: inline-flex;
  margin: 0 5px;
  font-size: 16px;
  text-decoration: none;
  font-weight: 900;
`;

const activeStyle = {
    color: 'white',
    background: 'black'
}
/* svg */
const heartAni = keyframes`
    0%{
        opacity:0;
        transform: translate3d(0,0,0)
                    rotate(10deg);
    }
    50%{
        opacity:1;
    }
    65%{
        opacity:1;
    }
    90%{
        opacity:0;
        transform: rotate(-10deg)
                    scale(1.2)
                    translate3d(0,-35vh,0)
                    ;
    }
    100%{
        opacity:0;
        
    };
`;
const SVG = styled.svg`
    opacity:0;
    animation: ${heartAni} 1.4s ease-in infinite;
    fill: ${({theme})=>theme.fifth};
    display:block;
`;

const SecSVG = styled(SVG)`
    position: absolute;
    left: 1rem;
    animation: ${heartAni} 1.4s ease-in 0.3s infinite;
`;

const ThirdSVG = styled(SVG)`
    left: 0.5rem;
    animation: ${heartAni} 1.4s ease-in 0.6s infinite;
`;



class Header extends Component{
render(){
    return(
        <NavWrapper>
            <Side>
            <SVG width="80" height="80" viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg">
                <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
            </SVG>
            <SecSVG width="80" height="80" viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg">
                <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
            </SecSVG>
            <ThirdSVG width="80" height="80" viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg">
                <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
            </ThirdSVG>
            </Side>
            <Center>
                <nav>
                    <HeadWrapper>
                        <ImgWrapper>
                            <HeadImg src={author}/>
                        </ImgWrapper>
                        <HeadText>Joyce Zhou</HeadText>
                    </HeadWrapper>
                <div>
                    <NavItem exact to='/' activeStyle={activeStyle}>Home</NavItem>
                    <NavItem to='/contact'  activeStyle={activeStyle}>Contact</NavItem>
                    <NavItem to='/experience'  activeStyle={activeStyle}>Experience</NavItem>
                </div>
                </nav> 
            </Center>
            <Side>
            <SVG width="80" height="80" viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg">
                <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
            </SVG>
            <SecSVG width="80" height="80" viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg">
                <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
            </SecSVG>
            <ThirdSVG width="80" height="80" viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg">
                <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
            </ThirdSVG>
            </Side>
        </NavWrapper>
    )
}
}

export default Header;
