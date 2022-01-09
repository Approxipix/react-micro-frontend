import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeModule from './modules/HomeModule';
import BlogsModule from './modules/BlogsModule';
import AboutModule from './modules/AboutModule';
import FooterModule from './modules/FooterModule';
import './App.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Header />

      <main className="App__main">
        <Routes>
          <Route path="/" element={<HomeModule />} />
          <Route path="/blogs" element={<BlogsModule />} />
          <Route path="/about" element={<AboutModule />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      <footer className="App_footer">
        <FooterModule />
      </footer>
    </BrowserRouter>
  </div>
);

export default App;