import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { LoginContext } from './context/LoginContext';

function App({ token }: { token?: any }) {
  return (
    <LoginContext.Provider value={token}>
      <div>
        <Header />
        <Outlet />
      </div>
    </LoginContext.Provider>
  );
}

export default App;

