import "./style/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Item from "./pages/Item";
import AddItem from "./pages/AddItem";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/items/:id" element={<Item />} />
          <Route path="/additem" element={<AddItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

