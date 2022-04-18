/*
 * @Description: 
 * @Author: zhaocheng.zhai
 * @Date: 2022-04-15 17:12:35
 * @LastEditTime: 2022-04-18 15:12:35
 * @LastEditors: zhaocheng.zhai
 */
import { AuthenticatedApp } from 'authenticated-app';
import { useAuth } from 'context/auth-context';
import { UnauthenticatedApp } from 'unauthenticated-app';
import './App.css';

function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
