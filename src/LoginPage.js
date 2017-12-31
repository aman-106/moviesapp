import {FormGroup,ControlLabel,FormControl,HelpBlock,Button,Grid, Row, Col} from 'react-bootstrap';
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class FormExample extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value: '',
    };
    this.getValidationState = this.getValidationState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                          type="text"
                          value={this.state.value}
                          placeholder="Enter text"
                          onChange={this.handleChange}
                        />
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} md={4}>
              <ControlLabel>Passphrase</ControlLabel>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
              />
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={4}>
              <Button bsStyle="primary">Login</Button>
            </Col>
          </Row>

        </Grid>
      </FormGroup>
    </form>
    );
  }
};

export default FormExample;
