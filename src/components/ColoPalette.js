import React, { Component } from 'react';
import styles from './Style';

class ColoPalette extends Component {
  render() {
    return this.props.color.map(c => (
      <div key={c.id} style={{ background: `${c.hex}` }} className="color-palette">
        <p className="hex-color">{c.hex}</p>
      </div>
    ))
  }
}

export default ColoPalette;
