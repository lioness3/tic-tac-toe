import React from 'react';
import { connect } from 'react-redux';
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
Square = connect()(Square);
export default Square;
