import logo from './logo.svg';
import './App.css';
import Shows from './Pages/Shows/Shows';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Booking from './Pages/Explore/Explore';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shows />}></Route>
          <Route path="/explore/:showId" element={<Booking />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
