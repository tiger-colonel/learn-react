/*
 * @Description: 
 * @Author: zhaocheng.zhai
 * @Date: 2022-04-15 17:12:35
 * @LastEditTime: 2022-04-18 16:22:25
 * @LastEditors: zhaocheng.zhai
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProviders } from 'context';
import reportWebVitals from './reportWebVitals';
import { loadDevTools } from 'jira-dev-tool';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

loadDevTools(() => root.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
