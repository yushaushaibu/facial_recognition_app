import react, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank';
import './App.css';

class App extends Component {
  render() {
      return (
        <div className='App'>
        
            <Navigation />
            <Logo/>
            <Rank />
            <ImageLinkForm />

            {/*<FacialRecognition />} */}
        </div>
      )
  }
}

export default App;