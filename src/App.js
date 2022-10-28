import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import './App.css';
import Home from './pages/Home'
import Indoor from './pages/Indoor'
import Blockage from './pages/Blockage'
import Bugs from './pages/Bugs'
import DoorWindowFix from './pages/DoorWindowFix'
import Storage from './pages/Storage'
import Feedback from './pages/Feedback';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Components from './pages/components';
import Reserve from './pages/Reserve';

import store from './redux/store';



function App() {

  return (
    <Provider store={store}>
      <NavBar />
        <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/components" element={<Components />} />
              <Route path="/indoor" element={<Indoor />} />
              <Route path="/storage" element={<Storage />} />
              <Route path="/bugs" element={<Bugs />} />
              <Route path="/blockage" element={<Blockage />} />
              <Route path="/DoorWindowFix" element={<DoorWindowFix />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/reserve" element={<Reserve />} />
            </Routes>

          </div>
          <Footer />
    </Provider>
  );
}


export default App;