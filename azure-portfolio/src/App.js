import './App.css';
import {Route, Routes} from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="tab-content col-md-10  col-10 d-flex align-items-center justify-content-center">

      <Routes>
        <Route path="/"/>
        <Route index element={<HomePage/>} />
        <Route path="*" element={<HomePage />} /> {/* Default if url doesn't exist.*/}
      </Routes>
      </div>
    </div>

  );
}

export default App;
