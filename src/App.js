import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeIndex from './pages/home/HomeIndex';
import Header from './components/header/Header';
import About from './pages/about/About';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import Gallery from './pages/gallery/Gallery';
import Auxuwi from './pages/auxuwi/Auxuwi';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomeIndex />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery></Gallery>} />
        <Route path='/auxuwi' element={<Auxuwi></Auxuwi>}></Route>
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
