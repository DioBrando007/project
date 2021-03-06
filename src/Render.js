import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updatePostText } from './Redux/State';
import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
    
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App state={state} addPost={addPost} updatePostText={updatePostText}/>
        </BrowserRouter>
      </React.StrictMode>
    );
}


