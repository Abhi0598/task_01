import Login from './components/login';
// import DashBoard from './components/DashBoard';
// import SideBar from './components/SideBar'
import BaseLayout from './components/baselayout';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard"  element={<BaseLayout/>} />
         
      </Routes>
    </div>
  </Router>
  )
}

export default App;
