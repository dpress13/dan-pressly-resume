/** @jsxImportSource @emotion/react */
import React from "react";
import { jsx, css } from '@emotion/react';
import { Container } from "@mui/material";

import HeroURL from '../assets/images/dan-pressly-react-developer-resume-hero.webp';


const heroImage = css`
    background-image: url('${HeroURL}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 35vh;
    position: relative;
`
const heroText = css`
    text-align: right;
    position: absolute;
    width: 100%
`
const h1Hero = css`
    color: white;    
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: -0.1rem;
    line-height: 0;
    margin: 5rem 4rem 0 0;
    text-transform: uppercase;
`
const h2Hero = css`
    color: white;    
    font-size: 1rem;
    font-weight: 400;
    margin: 1.1rem 4.6rem 0 0;
`


function Header() {
    return(
        <header>
            <Container>
                <div css={heroImage}>
                    <div css={heroText}>
                        <div>
                            <h1 css={h1Hero}>Dan Pressly</h1>
                            <h2 css={h2Hero}>React Web Developer</h2>
                            <h2>Test 2</h2>
                            <h2>Test 2</h2>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}




// import Hero from '../assets/images/dan-pressly-react-developer-resume-hero.webp';
// const HeroImage = {
//     backgroundImage: `url(${Hero})`,
//     // backgroundImage: `url(https://source.unsplash.com/random)`,
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     height: '35vh',
//     position: 'relative'
//     // width: '1200px' 
// }

// function Header() {
//     return(
//         <header>
//             <Container maxWidth='lg' disableGutters='true'>
//                 <div style={HeroImage}>
//                     <div className="info">
//                         <h1>Dan Pressly</h1>
//                         <h2>React Web Developer</h2>
//                         <h2>Test 2</h2>
//                         <h2>Test 2</h2>
//                     </div>
//                 </div>
//             </Container>
//         </header>
//     );
// }

export default Header;