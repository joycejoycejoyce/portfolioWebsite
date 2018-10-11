import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';


const Intro = styled.div`
padding: 1% 17% 3% 17%;
`;
const Para = styled.p`
    text-indent: 30px;
    font-size: 1.1rem;
    word-spacing: 4px;
    line-height: 26px;
`;
/* waving effect */
const handWave = keyframes`
from {
    transform: rotate(-60deg);
}
to {
    transform: rotate(0deg);
}

`;
const Waving = styled.span`
    animation: ${handWave} 1.4s ease-in 1s alternate backwards;
    display: inline-block;
    animation-timing-function: ease-in-out;
`;


class Home extends Component{
    render(){
        return(
            <div>
                <Intro>
                   <Para>
                       Hi,<Waving role="img" aria-label="waving-hand">🙋</Waving> I am Joyce Zhou. I am a senior student majoring CIT.
                       I study at Purdue University which located at West Lafayette.
                       Studying in here is a very fun experience. I wasn't a coding major,
                       in fact, I didn't thought about do computer related jobs in the future 
                       at all in my Freshman year. But then through the exploring I found out 
                       that coding is really want I like and willing to pursue as a career. 
                   </Para>
                   <Para>
                       Nothing is more logical than coding. Which I really enjoyed. For me, coding 
                       questions are as fun as those detective games. A chance working for web development
                       makes me found the more specific direction I'd love to go. When I think about that 
                       my website can be viewed by other people, it is so fun. 
                   </Para>
                   <Para>
                       Other than code, I have many other hobbies too. Like cooking, outdoor running, and 
                       reading. Those things helps me relax and keeps anxiety away from me. 
                   </Para>
                </Intro>
            </div>
        )
    }
}
export default Home;