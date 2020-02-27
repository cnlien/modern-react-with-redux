import React from 'react';
import unsplash from './api/unsplash';

//STYLES
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row } from 'reactstrap'


//COMPONENTS
import SearchBar from './Components/SearchBar';
import ImageList from './Components/ImageList';


class App extends React.Component{

  state = {
    images: [],
  };

  onSearchSubmit = async term => {
    const res = await 
      unsplash.get('/search/photos', {
        params: { query: term },
      })
    this.setState({images: res.data.results})
  };

  render() {
    return (
      <div className="App">
        <Container style={{marginTop:"20px", marginBottom:"20px"}}>
          <SearchBar
            onSearchSubmit={this.onSearchSubmit}
          />
          Found: {this.state.images.length} images
        </Container>

        <Container>
          <Row xs="2">
            <ImageList
              images={this.state.images}
            />
          </Row>
        </Container>

        
      </div>
    );
  }
}

export default App;
