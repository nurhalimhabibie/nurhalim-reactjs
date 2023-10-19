import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

class ClassComponent extends React.Component {
  state = {
    value: 0,
  };

  handlePlus = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleMinus = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  render() {
    return (
      <div>
        <Container className="mt-5 ps-5">
          <h1>Komponen dengan class Component</h1>
          <h2>Hello {this.props.nama}</h2>
          <button onClick={this.handleMinus}> - </button>
          <span> {this.state.value} </span>
          <button onClick={this.handlePlus}> + </button>
        </Container>
      </div>
    );
  }
}

ClassComponent.propTypes = {
  nama: PropTypes.string.isRequired,
};

export default ClassComponent;
