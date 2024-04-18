import "./style/App.css";
import { Outlet } from "react-router-dom";
import Item from "./pages/Item";
import AddItem from "./pages/AddItem";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

