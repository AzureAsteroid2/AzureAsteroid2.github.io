import './App.css';
import {Route, Routes} from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import BananaPage from './views/BananaPage/BananaPage';
import Header from './components/Header';
function App() {
  return (

  <div className="container-fluid position-relative flex-grow-1">
    <div className="background-img mt-0" />
        <div className="row mt-auto underNav">
      <Header></Header>
      <div className="tab-content d-flex align-items-center justify-content-center">
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/banana" element={<BananaPage/>} />
        <Route path="*" element={<HomePage />} /> {/* Default if url doesn't exist.*/}
      </Routes>
      </div>
    </div>
</div>

  );
}

export default App;
