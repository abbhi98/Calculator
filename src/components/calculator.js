import React from "react";
import CalculatorTitle from "./calculatorTitle.js";
import OutputScreen from "./outputScreen.js";
import Button from "./button.js";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      question: "",
      answer: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div className="frame">
        <CalculatorTitle value="Calculator" />
        <OutputScreen
          question={this.state.question}
          answer={this.state.answer}
        />
        <div className="button-row">
          <Button handleClick={this.handleClick} label={"Clear"} />
          <Button handleClick={this.handleClick} label={"Delete"} />
          <Button handleClick={this.handleClick} label={"."} />
          <Button handleClick={this.handleClick} label={"/"} />
        </div>
        <div className="button-row">
          <Button handleClick={this.handleClick} label={"7"} />
          <Button handleClick={this.handleClick} label={"8"} />
          <Button handleClick={this.handleClick} label={"9"} />
          <Button handleClick={this.handleClick} label={"*"} />
        </div>
        <div className="button-row">
          <Button handleClick={this.handleClick} label={"4"} />
          <Button handleClick={this.handleClick} label={"5"} />
          <Button handleClick={this.handleClick} label={"6"} />
          <Button handleClick={this.handleClick} label={"-"} />
        </div>
        <div className="button-row">
          <Button handleClick={this.handleClick} label={"1"} />
          <Button handleClick={this.handleClick} label={"2"} />
          <Button handleClick={this.handleClick} label={"3"} />
          <Button handleClick={this.handleClick} label={"+"} />
        </div>
        <div className="button-row">
          <Button handleClick={this.handleClick} label={"0"} />
          <Button handleClick={this.handleClick} label={"="} />
        </div>
      </div>
    );
  }
  handleClick(event) {
    const value = event.target.value;
    switch (value) {
      case "=": {
        const answer = eval(this.state.question).toString();
        this.setState({ answer });
        break;
      }
      case "Clear": {
        this.setState({ question: "", answer: "" });
        break;
      }

      case "Delete": {
        var str = this.state.question;
        str = str.substr(0, str.length - 1);
        this.setState({ question: str });
        break;
      }

      default: {
        this.setState({ question: (this.state.question += value) });
        break;
      }
    }
  }
}
export default Calculator;
