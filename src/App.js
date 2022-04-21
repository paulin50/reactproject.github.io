import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import ContactPage from './components/pages/ContactPage';
import AboutPage from './components/pages/AboutPage';
import HomePage from './components/pages/HomePage';
import NavBar from './components/layout/NavBar';
import PageNotFound from './components/pages/PageNotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListing from './components/pages/ProductListing';
import ProductDetails from './components/pages/ProductDetails';
import Header from './components/pages/Header';


function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Header/>
        {/* <NavBar/> */}
        <Routes>
          {/* <Route exact path='/' element={<HomePage/>}/> */}
          <Route exact path='/' element={<ProductListing />}/>
          <Route path="/product/:productId" element={ <ProductDetails/> } />
          <Route exact path='/about' element={<AboutPage/>}/>
          <Route exact path='/contact' element={<ContactPage/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
