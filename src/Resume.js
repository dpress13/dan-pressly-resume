import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import { spacing } from '@mui/system';
// import Button from "@mui/material/Button";

import theme from "./components/Theme";
import Header from "./components/Header";
import CoverLetter from "./components/CoverLetter";
// import "./assets/css/scss/Resume.scss";
// import '../App.css';

const Resume = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters="true">
        <Header />
      </Container>
      <main>
          <CoverLetter />
          {/* <Button variant="contained">Hello World</Button> */}
      </main>
      <footer></footer>
    </ThemeProvider>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Resume;
