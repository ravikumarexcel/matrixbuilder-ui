import { Link, Outlet } from "react-router-dom";

const FullLayout = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default FullLayout;