import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import EventCode from './EventCode';
import UserHome from './UserHome';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/eventcode" element={<EventCode/>} />
          <Route path="/userHome" element={<UserHome/>} />
          <Route path="/matchedProfiles" element={<matchedProfiles/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
