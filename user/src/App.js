//import logo from './logo.svg';
import "./App.css";
// eslint-disable-next-line no-unused-vars
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Cartscreen from "./screens/Cartscreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import Ordersscreen from "./screens/Ordersscreen";
import { useSelector } from "react-redux";
import Navadmin from "./components/Navadmin";
import Additemscreen from "./screens/Additemscreen";
import Allordersscreen from "./screens/Allordersscreen";
import Allusersscreen from "./screens/Allusersscreen";

function App() {
  const currentUser = useSelector(
    (state) => state.loginUserReducer.currentUser
  );

  return (
    <div className="App">
      {currentUser && currentUser.isAdmin === true ? <Navadmin /> : <Navbar />}

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homescreen />} />
          <Route path="/cart" exact element={<Cartscreen />} />
          <Route path="/register" exact element={<Registerscreen />} />
          <Route path="/login" exact element={<Loginscreen />} />
          <Route path="/orders" exact element={<Ordersscreen />} />

          <Route path="/additem" exact element={<Additemscreen />} />
          <Route path="/allorders" exact element={<Allordersscreen />} />
          <Route path="/allusers" exact element={<Allusersscreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
