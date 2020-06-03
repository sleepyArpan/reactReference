import React from 'react';

const WithClass = (props) => {
  return <div className={props.classes}>{props.children}</div>;
};

export default WithClass;
