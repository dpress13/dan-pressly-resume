/** @jsxImportSource @emotion/react */
import React from "react";
import { jsx, css } from "@emotion/react";
import { Container } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import Hero from "./Hero";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <Hero />
      <nav>
        <Navigation />
      </nav>
    </header>
  );
};

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
