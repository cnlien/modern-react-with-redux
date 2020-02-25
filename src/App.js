import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Spinner } from 'reactstrap';

class App extends React.Component {

  // Constructor loads immediately on load. Not required but if it's used you must call super(props);
  constructor(props){
    super(props);

    this.state = {
      lat: null,
      long: null,
      errorMessage: "",
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.table(position)
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        })
      },
      (err) => {
        console.log(err);
        this.setState({
          errorMessage: err.message,
        })
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return(
        <Container>
          <h3>Error: {this.state.errorMessage}</h3>
        </Container>
      )
    } else if (!this.state.errorMessage && this.state.lat) {
      return (
        <Container>
          <h3>Latitude: {this.state.lat}</h3>
          <h3>Longitude: {this.state.long}</h3>
        </Container>
      )
    } else {
      return (
        <Container>
          <h3>Latitude: <Spinner color="dark" /></h3>
          <h3>Longitude: <Spinner color="dark" /></h3>
        </Container>
      );
    }
  }
}



export default App;
