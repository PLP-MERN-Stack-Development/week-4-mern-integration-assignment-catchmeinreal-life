import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/**pages */
import Home from './pages/Home';
import Signin from './pages/Signin';
import Login from './pages/Login';


export default function App() {


  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  )
}

