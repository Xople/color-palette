import React from 'react';
import logo from './logo.svg';
import ColorPicker from './components/ColorPicker';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Make Your Own Color Palette</h1>
      <ColorPicker />
    </div>
  );
}

export default App;
