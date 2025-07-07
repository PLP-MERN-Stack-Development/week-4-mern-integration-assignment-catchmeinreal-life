import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const isAuthPage = pathname === '/login' || pathname === '/signup';
  const isHomePage = pathname === '/home';

  // Simulated user (replace later)
  // const userProfile = {
  //   name: 'Eric M.',
  //   email: 'eric@mochatasks.com',
  //   avatar: 'https://i.pravatar.cc/40?img=3',
  // };

  if (isAuthPage) {
    return (
      <nav className="navBar">
        {/* Centered Logo */}
        <Link to="/" className="">
          <span className="text-[#D7CCC8]">Home</span>
        </Link>

        {/* Auth Switch */}
        <div className="absolute right-6 text-sm">
          {pathname === '/login' ? (
            <span>
              No account?{' '}
              <Link to="/signup" className="text-[#D7CCC8] underline hover:text-white">
                Sign up
              </Link>
            </span>
          ) : (
            <span>
              Already a user?{' '}
              <Link to="/login" className="text-[#D7CCC8] underline hover:text-white">
                Log in
              </Link>
            </span>
          )}
        </div>
      </nav>
    );
  }

  return (
    <nav className="">
      {/* Logo */}
      <Link to="/" className="">
        Mocha<span className="">Tasks</span>
      </Link>

      {/* Main Navigation */}
      <div className="">
        <Link to="/home" className="">Home</Link>
        <Link to="/blog" className="">Blog</Link>
        <Link to="/about" className="">About</Link>
      </div>

      {/* Profile Section */}
      {isHomePage ? (
        <div className="">
          <ul>
            <li>Home page: </li>
          </ul>
        </div>
      ) : 
      <div className="">
        <ul>
          <li>not homepage: </li>
        </ul>
      </div> }
    </nav>
  );
}

export default Navbar;
