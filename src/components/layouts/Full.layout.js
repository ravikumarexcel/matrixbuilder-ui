import { Outlet } from "react-router-dom";
import Navigation from './Navigation';

const FullLayout = () => {
    return (
      <>
         <Navigation />
          <Outlet />
      </>
    )
  };
  
  export default FullLayout;