import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<p>Home page here</p>} />
          <Route path='/profile/:id' element={<p>Profile lookup page here</p>} />
          <Route path='/post/create' element={<p>Create listing page here</p>} />
          <Route path='/post/:id' element={<p>listing page here</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
