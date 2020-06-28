import reactCSS from 'reactcss';
const styles = reactCSS({
  'default': {
    container: {
      width: '100%',
      height: '85vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      width: '60%',
      height: '60vh',
      display: 'flex'
    },
    left: {
      width: '40%',
      height: '100%',
      marginRight: '2em',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    right: {
      width: '40%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    box: {
      width: '100%',
      height: '15%',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '2.3em',
      display: 'flex',
      alignItems: 'center',
      padding: '0 1em 0 1em',
    },
    colorp: {
      width: '100%',
      height: '100% !important'
    },
    wrapbutton: {
      margin: '1.3em 0',
    },
    button: {
      width: '200px',
      height: '40px',
      color: '#676767',
      background: 'white',
      border: '1px solid #ccc',
      borderRadius: '4px'
    },
    wrapPalette: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'static',
    },
    flexColumn: {
      width: '40%',
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    }
  }
});

export default styles;