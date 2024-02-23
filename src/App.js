import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
