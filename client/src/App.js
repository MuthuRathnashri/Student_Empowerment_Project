import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Website1 from './components/website1';
import Website2 from './components/website2';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Website1 />
      <Routes>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
