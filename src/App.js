import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Success from './Pages/Success';
import Error from './Pages/Error';
import { ToastContainer, toast } from 'react-toastify';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ResetPass from './Pages/ResetPass';
import VerifyOTP from './Pages/VerifyOTP';
function App() {
  return (
    <div >
     <Router>
      <Routes>
        <Route path='/' Component={Home}></Route>
        {/* <Route Component={ProtectedRoute}>
        <Route path='/success' Component={Success}></Route>
        </Route> */}
        <Route path='/success' Component={Success}></Route>
        <Route path='/*' Component={Error}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/signup' Component={Signup}></Route>
        <Route path='/forget-pass' Component={ResetPass}></Route>
        <Route path='/verify-otp' Component={VerifyOTP}></Route>

        

      </Routes>
     </Router>
    </div>
  
  );
}

export default App;
