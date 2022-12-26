import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './composants/Header';
import Footer from './composants/Footer';
import Home from './composants/Home';
import About from './composants/About';
import Blog from './composants/Blog';
import BestSales from './composants/BestSales';
import ClientsReview from './composants/ClientsReview';
import B from './composants/B';
import AfficheBooks from './composants/AfficheBooks';
import Contact from './composants/Contact';
import AddBook from './composants/AddBook';
import PolpularBooks from './composants/PolpularBooks';

function App() {
  return (
    <div className="main-layout">
     <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="b" element={<B/>}/>

      <Route path="" element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="blog" element={<Blog/>}/>
      <Route path="service" element={<BestSales/>}/>
      <Route path="Client" element={<ClientsReview/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="aa" element={<AfficheBooks/>}/>
      <Route path="admin" element={<AfficheBooks/>}/>
      <Route path="addBook" element={<AddBook/>}/>
      <Route path="PolpularBooks" element={<PolpularBooks/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
