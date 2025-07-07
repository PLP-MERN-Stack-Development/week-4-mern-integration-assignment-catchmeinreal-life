import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/**pages */
import Home from './pages/Home';
import Blog from './pages/Blogs'
import SignUpPage from './pages/Signin';
import Login from './pages/Login';

/**
 * verification page
 */
import Verification from './pages/Verification';

/**
 * 
 * @returns 
 */
import NotFound from './pages/NotFound';



export default function App() {


  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path='/verification' element={<Verification />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Index />} />
    //     <Route path="/auth/signin" element={<SignIn />} />
    //     <Route path="/auth/signup" element={<SignUp />} />
    //     <Route path="/profile" element={<Profile />} />
    //     <Route path="/shop" element={<Shop />} />
    //     <Route path="/product/:id" element={<ProductDetail />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </BrowserRouter>
