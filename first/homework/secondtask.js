import "./styles.css";
import React from "react";

export default function App() {
  const [showBlack, setShowBlack] = React.useState(false);

  const change = () => {
    //let text = document.getElementById("name");
    setShowBlack(!showBlack);
    // if (showBlack === true) {
    //   text.innerHTML = " White";
    //   text.style.backgroundColor = "black";
    //   text.style.color = "white";
    // } else {
    //   text.innerHTML = " Black";
    //   text.style.backgroundColor = "white";
    //   text.style.color = "black";
    // }
  };

  return (
    <div className="App">
      <p
        id="name"
        style={{
          backgroundColor: showBlack ? "black" : "white",
          color: showBlack ? "white" : "black"
        }}
      >
        {showBlack ? " showing black" : "Showing white"}
      </p>
      <button onClick={change}>Click Here</button>
    </div>
  );
}
