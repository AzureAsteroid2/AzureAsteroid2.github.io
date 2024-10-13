import './App.css';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="tab-content col-md-10  col-10 d-flex align-items-center justify-content-center">
      {/* All pages should be declared here */}
      <Routes>
        <Route></Route>
      </Routes>
      </div>
    </div>

  );
}

export default App;
