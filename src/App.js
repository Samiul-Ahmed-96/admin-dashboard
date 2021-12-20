
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home/Home';
import User from "./Pages/User/User";


function App() {
  return (
   <BrowserRouter>
   <div className="App">
   <Navbar/>
   <div className="container">
     <Sidebar/>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/home" element={<Home />} />
     <Route path="/user" element={<User />} />
     </Routes>
   </div>  
</div>
   </BrowserRouter>
  );
}

export default App;
