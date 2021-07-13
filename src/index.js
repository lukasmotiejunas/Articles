import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Container from '@material-ui/core/Container';
import { CounterProvider } from "./context/ContextRouter";

ReactDOM.render(
  <React.StrictMode>
    <Container maxWidth="xl">
      <CounterProvider>
        <App />
      </CounterProvider>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
