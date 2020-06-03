import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Auxilliary from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[Person.js] rendering');
    return (
      <Auxilliary>
        <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? <p>Authenticated!</p> : <p>Please Login</p>
          }
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type='text'
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
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
