import React from "react";
import ReactDom from 'react-dom';
import App from './App.js';
import ThemeProvider from './context.js';
ReactDom.render(<ThemeProvider><App /></ThemeProvider>,document.getElementById('root'));