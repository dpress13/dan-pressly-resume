/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { Container } from '@mui/material';

import "../assets/css/scss/components/_hero.scss";

// const heroImage = css`
//     background: url('${HeroURL}') no-repeat center;
//     background-size: cover;
//     min-height: 340px;
//     padding: none;
//     position: relative;
// `
// const heroText = css`
//     color: white;
//     text-align: right;
//     position: absolute;
//     right: 0;
// `
// const name = css`    
//     font-size: 3rem;
//     font-weight: 700;
//     letter-spacing: -0.1rem;
//     line-height: 0;
//     margin: 6rem 4rem 0 0;
//     text-transform: uppercase;
// `
// const occupation = css` 
//     font-size: 1rem;
//     font-weight: 400;
//     margin: 1.1rem 4.6rem 0 0;
// `

// const contactContainer = css`
//     margin: 7.4rem 4.6rem 0 0;
// `

// const contactInfo = css`
//     font-size: 1rem;
//     font-weight: 400;
//     margin: 0 0 0 0;
// `

const Hero = () => {
    return (
            <div className='hero-image'>
                <div className='hero-text'>
                    <div>
                        <h1 className='hero-text__name'>Dan Pressly</h1>
                        <h2 className='hero-text__occupation'>React Web Developer</h2>
                    </div>
                    <div className='hero-text__contact-wrapper'>    
                        <p className='hero-text__contact-info'>Asheville, NC</p>
                        <a className='hero-text__contact-info' href="tel:+1 (330) 307-1794">330-307-1794</a>
                        <a className='hero-text__contact-info' href="mailto:Pressly.Daniel@gmail.com">Pressly.Daniel@gmail.com</a>
                    </div>
                </div>
            </div>
    )
}

export default Hero;