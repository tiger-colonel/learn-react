/*
 * @Description: 
 * @Author: zhaocheng.zhai
 * @Date: 2022-04-15 17:12:35
 * @LastEditTime: 2022-04-18 15:12:35
 * @LastEditors: zhaocheng.zhai
 */
import React from 'react';
import './App.css';
import { ProjectListScreen } from 'screens/project-list'
import { LoginScreen } from 'screens/login'

function App() {
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      <LoginScreen />
    </div>
  );
}

export default App;
