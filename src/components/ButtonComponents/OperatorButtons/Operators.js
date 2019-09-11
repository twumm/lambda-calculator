import React, { useState } from "react";

//import any components needed
import OperatorButton from './OperatorButton';
import './Operator.css';
//Import your array data to from the provided data file
import { operators } from '../../../data';

const Operators = () => {
  // STEP 2 - add the imported data to state
  const operatorsState = useState(operators);
  const operatorCharacters = operatorsState[0];

  return (
    <div className="operatorsList">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {
        operatorCharacters.map(operator => (
          <OperatorButton
            key={operator.char}
            operator={operator.char}
          />
        ))
      }
    </div>
  );
};

export default Operators;
