import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // setTimeout(() => {
    //   alert('Saved data in cloud');
    // }, 1000);
    toggleButtonRef.current.focus();
    return () => {
      console.log('[Cockpit.js] cleanup work in useeffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] 2nd useEffect cleanup');
    };
  });

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPerson) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        ref={toggleButtonRef}
        className={btnClass}
        onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={props.login}>Login</button>
    </div>
  );
};

export default React.memo(Cockpit);
