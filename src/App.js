import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Spinner } from 'reactstrap';

import SeasonDisplay from './Components/SeasonDisplay';
import Clock from './Components/Clock';

class App extends React.Component {

  // Constructor loads immediately on load. Not required but if it's used you must call super(props);

  // constructor(props){
  //   super(props);

  //   this.state = {
  //     lat: null,
  //     long: null,
  //     errorMessage: "",
  //   };
  // }

  //NO REASON TO USE CONSTRUCTOR. THIS WILL COMPILE OUT WITH THE CONSTRUCTOR METHOD.
  state = {lat: null, long: null, errorMessage:""};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
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
    console.log("Component Did Mount")
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  //THIS IS CALLED A HELPER FUNCTION. IT'S USED TO AVOID MULTIPLE RETURNS INSIDE OF THE RENDER FUNCTION
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return(
        <h3>Error: {this.state.errorMessage}</h3>
      )
    } else if (!this.state.errorMessage && this.state.lat) {
      return (
        <SeasonDisplay
          lat={this.state.lat}
          long={this.state.long}
        />
      )
    } else {
      return (
        <div>
          <h3>Latitude: <Spinner color="dark" /></h3>
          <h3>Longitude: <Spinner color="dark" /></h3>
        </div>
      );
    }
  }

  render() {
    return (
      <Container style={{marginTop:"100px"}}>
        <Clock />
        {this.renderContent()}
      </Container>
    )
  }
}



export default App;
