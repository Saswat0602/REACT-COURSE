import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://lh3.googleusercontent.com/EbPS9tYwL3H8NkiYJPJbuRHmeIFVUYJs99IdfFT7ea6ZF9sw1Vhw9tiCFVCXqornHGKZyP8sy89up4G-yKqGzoLgPx8"
      alt="logo"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
