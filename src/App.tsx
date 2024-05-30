import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { AutoContext } from './context/AutoContext';

function App({ token }: { token?: any }) {
  return (
    <AutoContext.Provider value={token}>
      <>
        <Header />
        <Outlet />
      </>
    </AutoContext.Provider>
  );
}

export default App;

