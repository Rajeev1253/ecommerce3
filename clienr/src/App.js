import {Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/user/Dashboard';
function App() {
  return (

   <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>

      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>

    </Routes>
   </>
  );
}

export default App;
