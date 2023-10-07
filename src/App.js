import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="titel">Weather react app</h1>
        <Weather/>
        <footer>
          This project was coded by Ebba Emanuelsson and is{" "}
          <a
            href="https://github.com/EbbaEmanuelsson/weather-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourecd on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
