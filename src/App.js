import React, { Component } from 'react';
import Header from './Header/Header.js';
import Recipe from './Recipe/Recipe.js';
import Footer from './Footer/Footer.js';

class App extends Component {
  render() { 
    return (
      <>  
        <Header />
        <Recipe />
        {/* <Author /> */}
        <Footer />
      </>
    )
  }
}
 
export default App;