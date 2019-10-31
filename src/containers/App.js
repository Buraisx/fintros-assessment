import React from 'react';
import './App.scss';
// Components
import Header from '../components/Header/Header';
import StoryList from '../components/StoryList/StoryList';
import Footer from '../components/Footer/Footer';
const App = () => {
  return (
    <div className="site-container">
      <Header/>
      <StoryList/>
      <Footer />
    </div>
  );
}

export default App;
