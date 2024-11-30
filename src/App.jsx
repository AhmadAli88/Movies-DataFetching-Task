import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './components/Movies';
import List from './components/List';
import MyModal from './components/Modal';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/list/:movieId" element={<List />} />
          <Route path="/modal/:listId" element={<MyModal show={true} handleClose={() => {}} />} />
          {/* <Route path="/modal/:listId" element={<MyModal />} /> */}
          {/* <Route path="/modal/:movieId" element={<MyModal />} /> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
