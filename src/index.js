import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import contentHtml from './content';

// Create and inject the root element
const rootElement = document.createElement('div');
rootElement.id = 'root';
document.body.appendChild(rootElement);

// Render the React app
ReactDOM.render(<App />, rootElement);

// Inject additional HTML content
const contentElement = document.createElement('div');
contentElement.innerHTML = contentHtml;
document.body.appendChild(contentElement);