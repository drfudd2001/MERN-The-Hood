import './App.css';

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import HomePage from './Components/Home Page/homepage';
import ProfilePage from './Components/Profile Page/profilepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/profile' element={<ProfilePage />}/>
          <Route path='/profile/:id' element={<ProfilePage />}/>
          <Route path='/post/create' element={<p>Create listing page here</p>} />
          <Route path='/post/:id' element={<p>listing page here</p>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
