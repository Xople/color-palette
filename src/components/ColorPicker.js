import React, { Component } from 'react';
import Pdf from 'react-to-pdf';
import styles from './Style';
import '.././main.css';
import Box from './Box';
import ColorPalette from './ColoPalette';
import { SketchPicker } from 'react-color';

const ref = React.createRef();
const options = {
  orientation: 'landscape',
  unit: 'in',
  format: [800, 468]
};

class ColorPicker extends Component {
  state = {
    background: '#fff',
    hex: '#fff',
    data: [
      {
        id: 1,
        hex: '#C83B3B'
      },
      {
        id: 2,
        hex: '#C43042'
      },
      {
        id: 3,
        hex: '#B11529'
      },
      {
        id: 4,
        hex: '#870010'
      }
    ],
    idColor: 0
  }

  handleChangeComplete = (color, event) => {
    this.setState({ background: color.hex, hex: color.hex });
  }

  changeColor = obj => {
    const { id } = obj;
    let ubahWarna = [...this.state.data];

    ubahWarna[id - 1] = obj;

    this.setState({
      data: ubahWarna
    })
  }

  showButton = (paramId, paramHex) => {
    let currentIdColor = 0;
    paramId === undefined ? currentIdColor = 1 : this.setState({ background: paramHex, idColor: paramId })

    if (this.state.idColor === 0) {
      return null
    }

    return (
      <button key={this.state.idColor} onClick={this.changeColor.bind(this, { id: this.state.idColor, hex: this.state.background })} className="btn">Ubah</button>
    );
  }

  render() {

    return (
      <React.Fragment>
        <div style={styles.container}>
          <div style={styles.card}>
            <div style={styles.left}>
              <SketchPicker
                style={styles.colorp}
                color={this.state.background}
                onChange={this.handleChangeComplete}
              />
              <div style={styles.wrapbutton}>
                {this.showButton()}
              </div>
            </div>
            <div style={styles.right}>
              <Box dataColor={this.state.data} showButton={this.showButton} />
              <Pdf targetRef={ref} filename="your-color-palette.pdf" options={options} x={.1} y={.1} >
                {({ toPdf }) => <button className="btn-save" onClick={toPdf}>Save Palette</button>}
              </Pdf>
            </div>
          </div>

        </div>
        <div style={styles.wrapPalette} ref={ref}>
          <h2>Your Color Palette</h2>
          <div style={styles.flexColumn}>
            <ColorPalette color={this.state.data} />
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default ColorPicker;