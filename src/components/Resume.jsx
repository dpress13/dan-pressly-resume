import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';

import theme from "./Theme";
import Header from './Header';
import '../assets/css/scss/Resume.scss';
// import '../App.css';

function App() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" disableGutters='true'>
            <Header />
              <nav></nav>
              <main>
                <Container>
                  <Button variant="contained">Hello World</Button>
                </Container>
              </main>
            <footer></footer>
        </Container>
      </ThemeProvider>
    );
  }


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

export default App;
