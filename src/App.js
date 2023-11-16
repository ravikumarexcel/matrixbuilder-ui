import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullLayout from './components/layouts/Full.layout';
import Home from './components/containers/Home';
import Login from './components/containers/Login';
import Profile from './components/containers/Profile';
import NoPage from './components/containers/NoPage';
 

// library.add(fas, farFaCoffee)

function App() {
  return (
    <div className="App">
        
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<FullLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
       
       
    </div>
  );
}

export default App;
