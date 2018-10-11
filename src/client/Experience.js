import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import dm from '../asset/dm.png';
import sinopec from '../asset/sinopec.png';

const Div = styled.div`
    padding: 1% 17% 3% 17%;
`;
const SkillWrapper = styled(Grid)`
    position: relative;
    text-align: center;
`;
const Blur = styled.div`
    position: relative;
    &: hover{
        filter: blur(5px);
    }
`
const Itext = styled.div`
    position: absolute;
    left: 43%;
    top: 40%;
    display: none;
    ${SkillWrapper}:hover &{
        color: ${({theme})=>theme.fifth};
        font-weight: bold; 
        font-size: 1.2rem;
        display: block;
    }
`;
const I = styled.i`

`;

// experience 
const Img = styled.img `
    height: 17rem;

`;


class Experience extends Component{
    render(){
        return(
            <Div>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <h2>Skill</h2>
                    </Grid>
                    <SkillWrapper item xs={12} sm={4}>
                            <Itext>HTML</Itext>
                            <Blur>
                                <I class="fab fa-html5 fa-7x"></I>
                            </Blur>
                    </SkillWrapper>
                    <SkillWrapper item xs={12} sm={4}>
                        <Itext>CSS</Itext>
                        <Blur>
                            <I class="fab fa-css3-alt fa-7x"></I>
                        </Blur>
                    </SkillWrapper>
                    <SkillWrapper item xs={12} sm={4}>
                    <Itext>JS</Itext>
                        <Blur>
                            <I class="fab fa-js fa-7x"></I>
                        </Blur>
                    </SkillWrapper>
                    <SkillWrapper item xs={12} sm={4}>
                    <Itext>React</Itext>
                        <Blur>
                            <I class="fab fa-react fa-7x"></I>
                        </Blur>
                    </SkillWrapper>
                    <SkillWrapper item xs={12} sm={4}>
                    <Itext>php</Itext>
                        <Blur>
                            <I class="fab fa-php fa-7x"></I>
                        </Blur>
                    </SkillWrapper>
                    <SkillWrapper item xs={12} sm={4}>
                    <Itext>Linux</Itext>
                        <Blur>
                            <I class="fab fa-linux fa-7x"></I>
                        </Blur>
                    </SkillWrapper>
                    <SkillWrapper item xs={12} sm={4}>
                    <Itext>Github</Itext>
                        <Blur>
                            <I class="fab fa-github fa-7x"></I>
                        </Blur>
                    </SkillWrapper>

                    <Grid item xs={12}>
                        <h2>Experience</h2>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardActionArea>
                                <Img src={dm}/>
                                <CardContent>
                                    <Typography>Desktop Metal</Typography>
                                    <Typography>
                                        Worked for Desktop Metal for 4 months. 
                                        Desktop Metal is an startup that dedicated 
                                        to build office-friendly 3D printers. The 
                                        company located in Alington, MA. I learned 
                                        a lot in there. First time using React, Redux 
                                        and MaterialUI. 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>                          
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardActionArea>
                                <Img src={sinopec}/>
                                <CardContent>
                                    <Typography>Sinopec</Typography>
                                    <Typography>
                                        Sinopec is the largest oil and gas corporation 
                                        in China. I feel really luck that I get the chance 
                                        to work for such a big company. In Sinopec, I worked
                                        for the internal document system, helping everyone 
                                        in the building with any technical issue. That was 
                                        quite challenging but fun. 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>                          
                        </Card>
                    </Grid>
                </Grid>
            </Div>
        )
    }
}
export default Experience;