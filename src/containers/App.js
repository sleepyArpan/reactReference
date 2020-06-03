import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxilliary from '../hoc/Auxilliary';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        {
          id: 1,
          name: 'Max',
          age: 28,
        },
        {
          id: 2,
          name: 'Manu',
          age: 29,
        },
        {
          id: 3,
          name: 'Stephanie',
          age: 26,
        },
      ],
      otherState: 'some other value',
      showPerson: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] Component did mount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  togglePersonsHandler = () => {
    const dontShow = this.state.showPerson;
    this.setState({ showPerson: !dontShow });
  };

  handleDeletePerson = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  handleNameChange = (event, personId) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === personId);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.handleDeletePerson}
          changed={this.handleNameChange}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Auxilliary>
        <button
          onClick={() => {
            let test = this.state.showCockpit;
            this.setState({ showCockpit: !test });
          }}>
          Cockpit toggle
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}>
          {this.state.showCockpit && (
            <Cockpit
              title={this.props.title}
              showPerson={this.state.showPerson}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          )}
          {persons}
        </AuthContext.Provider>
      </Auxilliary>
    );
    // React.createElement(
    //   'disv',
    //   {
    //     className: 'App',
    //   },
    //   React.createElement('h1', null, 'Hi I am a react app')
    // )
  }
}

export default withClass(App, classes.App);
