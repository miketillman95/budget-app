import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../client/node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BudgetsProvider} from './contexts/BudgetsContext'

ReactDOM.render(
  <React.StrictMode>
    {/* Setting up the Context API to apply this to the global state of the application */}
    <BudgetsProvider>
    <App />
    </BudgetsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
