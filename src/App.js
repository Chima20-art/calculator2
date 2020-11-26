import React from "react";
import "./App.css";

import Button from "./components/Nums";
import Operation from "./components/Operators";

class App extends React.Component {
  state = {
    userInput: "",
    userOutput: "0",
  };

  updateUserInput = (x) => {
    const { userInput } = this.state;
    this.setState({ userInput: this.state.userInput + x });
  };

  calculate() {
    var { userOutput } = this.state;
    const { userInput } = this.state;
    if (userInput.includes("+")) {
      const plus = userInput.indexOf("+");
      var a = userInput.substring(0, plus);
      var b = userInput.substring(plus + 1, userInput.length);
      this.setState({
        userOutput: parseInt(a) + parseInt(b),
      });
    } else if (userInput.includes("-")) {
      const minus = userInput.indexOf("-");
      var c = userInput.substring(0, minus);
      var d = userInput.substring(minus + 1, userInput.length);
      this.setState({
        userOutput: parseInt(c) - parseInt(d),
      });
    } else if (userInput.includes("×")) {
      const fois = userInput.indexOf("×");
      var e = userInput.substring(0, fois);
      var f = userInput.substring(fois + 1, userInput.length);
      this.setState({
        userOutput: parseInt(e) * parseInt(f),
      });
    } else if (userInput.includes("/")) {
      const slash = userInput.indexOf("/");
      var i = userInput.substring(0, slash);
      var g = userInput.substring(slash + 1, userInput.length);
      this.setState({
        userOutput: parseInt(i) / parseInt(g),
      });
    } else if (userInput.includes("%")) {
      const modulo = userInput.indexOf("%");
      var k = userInput.substring(0, modulo);
      var l = userInput.substring(modulo + 1, userInput.length);
      this.setState({
        userOutput: parseInt(k) % parseInt(l),
      });
    }

    return userOutput;
  }

  updateUserOutput() {
    this.setState({ userOutput: "we are counting" });
  }

  deleteUserInput() {
    this.setState({
      userInput: "",
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="indiv">
            <p>{this.state.userInput}</p>
          </div>
          <div classNamName="outdiv">
            <p>{this.state.userOutput}</p>
          </div>
        </div>

        <div className="App-body">
          <div className="App-row">
            <Button
              color="white"
              text="AC"
              onClick={() => {
                this.deleteUserInput();
              }}
            ></Button>
            <Button
              color="white"
              text="+/-"
              onClick={() => {
                this.updateUserInput("+/-");
              }}
            />
            <Button
              color="white"
              text="%"
              onClick={() => {
                this.updateUserInput("%");
              }}
            />
            <Operation
              className="smallDiv"
              color="white"
              text="/"
              onClick={() => {
                this.updateUserInput("/");
              }}
            />
          </div>
          <div className="App-row">
            <Button
              className="number"
              color="white"
              text="7"
              onClick={() => {
                this.updateUserInput("7");
              }}
            ></Button>
            <Button
              color="white"
              text="8"
              onClick={() => {
                this.updateUserInput("8");
              }}
            />
            <Button
              color="white"
              text="9"
              onClick={() => {
                this.updateUserInput("9");
              }}
            />
            <Operation
              className="smallDiv"
              color="white"
              text="×"
              onClick={() => {
                this.updateUserInput("×");
              }}
            />
          </div>

          <div className="App-row">
            <Button
              color="white"
              text="4"
              onClick={() => {
                this.updateUserInput("4");
              }}
            />
            <Button
              color="white"
              text="5"
              onClick={() => {
                this.updateUserInput("5");
              }}
            />
            <Button
              color="white"
              text="6"
              onClick={() => {
                this.updateUserInput("6");
              }}
            />
            <Operation
              className="smallDiv"
              color="white"
              text="-"
              onClick={() => {
                this.updateUserInput("-");
              }}
            />
          </div>

          <div className="App-row">
            <Button
              color="white"
              text="1"
              onClick={() => {
                this.updateUserInput("1");
              }}
            />
            <Button
              color="white"
              text="2"
              onClick={() => {
                this.updateUserInput("2");
              }}
            />
            <Button
              color="white"
              text="3"
              onClick={() => {
                this.updateUserInput("3");
              }}
            />

            <Operation
              className="smallDiv"
              color="white"
              text="+"
              onClick={() => {
                this.updateUserInput("+");
              }}
            />
          </div>

          <div className="App-row">
            <Button
              className="Div"
              color="white"
              text="0"
              onClick={() => {
                this.updateUserInput("0");
              }}
            />
            <Button
              className="Div"
              color="white"
              text=","
              onClick={() => {
                this.updateUserInput(",");
              }}
            />

            <Button
              className="Div"
              color="white"
              text="×"
              onClick={() => {
                this.updateUserInput("×");
              }}
            />
            <Operation
              color="white"
              text="="
              onClick={() => {
                this.calculate();
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
