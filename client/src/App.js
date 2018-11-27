import React, { Component } from 'react';
import { Grid, Row , Col} from 'react-bootstrap'
import Article from './containers/Article/Article'
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid className="App">
        <Row className="show-grid">
          <Col >
            {/* <Login /> */}
            <Article/>
            {/* <Route path="/login" component={Login} /> */}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;