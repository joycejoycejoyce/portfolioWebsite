import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const SkillWrapper = styled(Grid)`
    position: relative;
    text-align: center;
`;
const Blur = styled.div`
    position: relative;
`
const Itext = styled.div`
    position: absolute;
`;
const I = styled.i`
    ${Blur}:hover &{
        filter: blur(5px);
    }
`;


class Experience extends Component{
    render(){
        return(
            <div>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <h2>Skill</h2>
                    </Grid>
                    <SkillWrapper item xs={12} sm={4}>
                        <Blur>
                            <I class="fab fa-html5 fa-7x"></I>
                        </Blur>
                    </SkillWrapper>
                    <SkillWrapper item xs={12} sm={4}>
                        <i class="fab fa-css3-alt fa-7x"></i>
                    </SkillWrapper>
                    <SkillWrapper item xs={12} sm={4}>
                        <i class="fab fa-js fa-7x"></i>
                    </SkillWrapper>
                    <SkillWrapper item xs={12} sm={4}>
                        <i class="fab fa-react fa-7x"></i>
                    </SkillWrapper>
                    <SkillWrapper item xs={12} sm={4}>
                    <i class="fab fa-php fa-7x"></i>
                    </SkillWrapper>
                    <SkillWrapper item xs={12} sm={4}>
                    <i class="fab fa-linux fa-7x"></i>
                    </SkillWrapper>
                    <SkillWrapper item xs={12} sm={4}>
                        <i class="fab fa-github fa-7x"></i>   
                    </SkillWrapper>
                </Grid>
            </div>
        )
    }
}
export default Experience;