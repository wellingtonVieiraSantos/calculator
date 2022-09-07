
import './App.css';
import Calculator from './Components/Calculator';

import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './Styles/GlobalStyle';

const theme = {
  bgc: {
    primary: 'black',
    secondary: 'grey'
  }
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyle/>
      <div className="App">
          <h1>Calculadora</h1>
          <Calculator/>
      </div>
    </ThemeProvider>
  );
}

export default App;
