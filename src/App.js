
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="container">
          <Sidebar/>
          <div className="other">
            
          </div>
        </div>
    </div>
  );
}

export default App;
