import React, { Component } from 'react';
import AppNavbar from './components/navbar'
// import Jumbotron from "./components/Jumbotron"
import { Jumbotron } from 'reactstrap';
// import FormPro from "./components/Form"
import ModalForm from "./components/modal"
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/api";
import { ProList, ProListItem } from "./components/ProList"
import { Container, Row, Col } from "./components/Grid"
import Services from "./components/Services"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  state = {
    taxpros: [],
    taxproSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get taxpros update the taxpros state
    event.preventDefault();
    API.getTaxpros(this.state.taxproSearch)
      .then(res => this.setState({ taxpros: res.data }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Jumbotron>
          <h1>Tax Pro Market</h1>
          <ModalForm/>
        </Jumbotron>
        <Services />
        <form>
          <Container>
          <Row>
          <Col size="xs-12">
            {!this.state.taxpros.length ? (
              <h1 className="text-center">Search for a Professional</h1>
            ) : (
                <ProList>
                  {this.state.taxpros.map(taxpro => {
                    return (
                      <ProListItem
                        key={taxpro.fName}
                        fName={taxpro.fName}
                        address={taxpro.officeAddress}
                        zipcode={taxpro.zipcode}
                        thumbnail={taxpro.photoURL}
                      />
                    );
                  })}
                </ProList>
              )}
          </Col>
        </Row>
            <Row>
              <Col size="sx-9 sm-10">
                <Input
                  name="taxproSearch"
                  value={this.state.taxproSearch}
                  onChange={this.handleInputChange}
                />
              </Col>
              <Col size="xs-3 sm-2">
                <Button
                  onClick={this.handleFormSubmit}
                  type="success"
                  className="input-lg"
                >
                  Search
            </Button>
              </Col>
            </Row>
          </Container>
        </form>
      </div >
    );
  }
}

export default App;
