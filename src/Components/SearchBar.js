import React from 'react';
import { Container, Form, Input, Row, Col } from 'reactstrap';

class SearchBar extends React.Component {
    
    state = {
        term: "",
    };
    
    //////////////////////////////////////////////////////////
    //ARROW FUNCTIONS AUTOMATICALLY BIND THE VALUE OF 'THIS'//
    //////////////////////////////////////////////////////////

    handleChange = (e) => {
        this.setState({ term: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }
    
    render() {        
        return (
            <Container style={{paddingTop:"500px;"}}>
                <Form onSubmit={this.handleSubmit} >
                    <Input
                        type="text"
                        className="input"
                        placeholder="Image Search"
                        name="search"
                        value={this.state.term}
                        //value assigned to this prop is what shows on the front end. This is assigning the value on change and showing the current state.
                        onChange={this.handleChange}
                        onClick={this.handleClick}
                    />
                </Form>
            </Container>
        )
    }
}


export default SearchBar;