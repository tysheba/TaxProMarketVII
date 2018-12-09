import React, { Component } from 'react';
import AppNavbar from './components/navbar'
import { Jumbotron } from 'reactstrap';
import ModalForm from "./components/modal"
import Input from "./components/Input";
import ProfCard from "./components/ProCards/ProCard"
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
    taxproSearch: "",
    articles: []
  };

  componentDidMount () {
    API.getArticles()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
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
                  Search For Professional
            </Button>
              </Col>
            </Row>
          <Row>
          <Col size="xs-12">
                <ProList>
                  {this.state.taxpros.map(taxpro => {
                    return (
                      <ProListItem
                        key={taxpro.fName}
                        fName={taxpro.fName}
                        year={taxpro.year}
                        address={taxpro.officeAddress}
                        zipcode={taxpro.zipcode}
                        thumbnail={taxpro.photoURL}
                      />
                    );
                  })}
                </ProList>
          </Col>
        </Row>
          </Container>
          <Container>
                  <div>
                    <h3>Latest News</h3>
                    {this.state.articles.map(news => {
                      return (
                        <ProfCard
                        key={news.title}
                        title={news.title}
                        summary={news.summary}
                        link={news.link}
                        />
                      )
                    })}
                  </div>
          </Container>
           </form>
      </div >
    );
  }
}

export default App;
