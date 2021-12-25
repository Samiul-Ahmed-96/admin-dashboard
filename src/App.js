
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import CreateUser from "./Pages/CreateUser/CreateUser";
import Home from './Pages/Home/Home/Home';
import User from "./Pages/User/User";
import UserEdit from "./Pages/UserEdit/UserEdit";


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
     <Route path="/CreateUser" element={<CreateUser />} />
     <Route path="/user/:userId" element={<UserEdit />} />
     </Routes>
   </div>  
</div>
   </BrowserRouter>
  );
}

export default App;
