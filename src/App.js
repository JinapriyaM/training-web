import React from 'react';

import './App.css';

// import Diary from './containers/Diary/Diary'
import AppHeader from './components/Header/AppHeader'
import Diary from './containers/Diary/Diary'

function App() {
  return (
    <div >
      <AppHeader />
      <Diary />
      <Diary />
    </div>
    
);
}

export default App;
