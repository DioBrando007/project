import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redux/State';
import { addPost } from './Redux/State';
import { BrowserRouter } from 'react-router-dom'
import {rerenderEntireTree} from './Render'


rerenderEntireTree(state);