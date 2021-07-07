import { useState } from "react";
import "./styles.css";

const CompA = () => {
  const [obj, setobj] = useState({
    key1: 100,
    key2: 200,
    key3: 300
  });

  const changeController = () => {
    setobj({
      ...obj,
      key2: 756
    });
  };

  return (
    <div>
      <CompB changeController={changeController} myProp={obj} />
      <CompD anotherProp={obj} />
    </div>
  );
};

const CompB = (props) => {
  return (
    <div>
      <h1> B </h1>
      {props.myProp.key1}
      <br />
      {props.myProp.key2}
      <br />
      {props.myProp.key3}
      <br />

      <CompC call={props.myProp} />
      <button onClick={props.changeController}>Update me</button>
      <br />
    </div>
  );
};

const CompC = (props) => {
  return (
    <div>
      <h1> C </h1>
      {props.call.key1}
      <br />
      {props.call.key2}
      <br />
      {props.call.key3}
      <br />
    </div>
  );
};

const CompD = (props) => {
  return (
    <div>
      <h1> D </h1>
      {props.anotherProp.key1}
      <br />
      {props.anotherProp.key2}
      <br />
      {props.anotherProp.key3}
      <br />
    </div>
  );
};

export default CompA;
