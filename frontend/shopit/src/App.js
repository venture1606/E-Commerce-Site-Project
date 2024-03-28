import { LoginPage } from "./Components/LoginPage";
import './Components/AllStyle.css'
import { Header } from "./Components/layouts/Header";
import { Footer } from "./Components/layouts/Footer";
import { Home } from "./Components/Home";
import { Cart } from './Components/Cart';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Details } from "./Components/Details";


function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element = {<Cart/>} />
          <Route path="/login" element = {<LoginPage/>} />
          <Route path="/details" element = {<Details/>} />
        </Routes>
      <Footer/>
     </Router>
  );
}

export default App;
