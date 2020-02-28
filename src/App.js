import React from 'react';
import unsplash from './api/unsplash';

//STYLES
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row } from 'reactstrap'


//COMPONENTS
import SearchBar from './Components/SearchBar';
import Image from './Components/Image';


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
          <Row>
          <SearchBar
            onSearchSubmit={this.onSearchSubmit}
          />
          </Row>

          <Row>
            <p>Found: {this.state.images.length} images</p>
          </Row>

          <Row xs="2">
            {this.state.images.map((image)=> (
              <Image
                key={image.id}
                src={image.src}
                alt={image.alt}
              />
            ))}

            {/* {this.state.images.map((image)=> {
              <Image
                key={image.id}
                src={image.regular}
                alt={image.description}
              />
            })} */}
            
          </Row>

        </Container>


        
      </div>
    );
  }
}

export default App;
