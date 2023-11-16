import { Outlet } from "react-router-dom";
import Navigation from './Navigation';

const FullLayout = () => {
    return (
      <div class="container-fluid p-0">

         <Navigation />
          <Outlet />
      </div>
    )
  };
  
  export default FullLayout;