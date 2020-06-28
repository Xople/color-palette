import React, { Component } from 'react';
import styles from './Style';

class Box extends Component {
  render() {
    return this.props.dataColor.map(data => (
      <div style={styles.box} key={data.id} onClick={this.props.showButton.bind(this, data.id, data.hex)} className="box"> {'  '}
        <div style={{ backgroundColor: `${data.hex}`, width: '20%', height: '50%', borderRadius: '4px', boxShadow: '-2px 0px 9px 0px rgba(0,0,0,0.75)' }}>
        </div>
        <p style={{ fontSize: '.9em', padding: '0 0 0 2em' }}>{data.hex}</p>
      </div>
    ))
  }
}

export default Box;
