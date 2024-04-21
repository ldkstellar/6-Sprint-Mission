import "./style/App.css";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import { LoginContext } from "./context/LoginContext";


function App() {
  const [login, setLogin] = useState(true);
  return (

    <LoginContext.Provider value={login}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </LoginContext.Provider>

  );
}

export default App;

