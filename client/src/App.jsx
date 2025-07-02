import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/**pages */
import Home from './pages/Home';
import SignUpPage from './pages/Signin';
import Login from './pages/Login';

/**
 * verification page
 */
import Verification from './pages/Verification';


export default function App() {


  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path='/verification' element={<Verification />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  )
}

