import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { AutoContext } from './context/AutoContext';

function App({ token }: { token?: any }) {
  return (
    <AutoContext.Provider value={token}>
      <div>
        <Header />
        <Outlet />
      </div>
    </AutoContext.Provider>
  );
}

export default App;

