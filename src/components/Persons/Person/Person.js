import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Auxilliary from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering');
    return (
      <Auxilliary>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type='text'
          value={this.props.name}
          onChange={this.props.changed}
        />
      </Auxilliary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func.isRequired,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func.isRequired,
};

export default withClass(Person, classes.Person);
