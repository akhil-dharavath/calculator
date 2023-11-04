import React, { useState } from "react";

const Calculator = () => {
  const [output, setOutput] = useState("null");

  const handleOutput = (sign) => {
    try {
      if (sign === "ac") {
        setOutput("null");
        return;
      }
      if (sign === "del") {
        setOutput(output.slice(0, -1));
        return;
      }
      if (output.indexOf("null") === 0) {
        setOutput(output.slice(3));
        setOutput(sign.toString());
      } else {
        setOutput(output + sign.toString());
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleCalculation = () => {
    try {
      // eslint-disable-next-line
      setOutput(eval(output).toString());
    } catch (error) {
      alert(error.message);
    }
  };

  const handleInputField = (e) => {
    setOutput(e.target.value);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <div className="calculator">
        <input
          placeholder="0"
          value={output !== "null" ? output : ""}
          onChange={(e) => {
            handleInputField(e);
          }}
        />
        <div>
          <p className="symbol" onClick={() => handleOutput("ac")}>
            AC
          </p>
          <p
            className="symbol"
            onClick={() => (output === "null" ? {} : handleOutput("del"))}
          >
            DEL
          </p>
          <p className="symbol" onClick={() => handleOutput("%")}>
            %
          </p>
          <p className="symbol" onClick={() => handleOutput("/")}>
            /
          </p>
        </div>
        <div>
          <p onClick={() => handleOutput(7)}>7</p>
          <p onClick={() => handleOutput(8)}>8</p>
          <p onClick={() => handleOutput(9)}>9</p>
          <p className="symbol" onClick={() => handleOutput("*")}>
            *
          </p>
        </div>
        <div>
          <p onClick={() => handleOutput(4)}>4</p>
          <p onClick={() => handleOutput(5)}>5</p>
          <p onClick={() => handleOutput(6)}>6</p>
          <p className="symbol" onClick={() => handleOutput("-")}>
            -
          </p>
        </div>
        <div>
          <p onClick={() => handleOutput(1)}>1</p>
          <p onClick={() => handleOutput(2)}>2</p>
          <p onClick={() => handleOutput(3)}>3</p>
          <p className="symbol" onClick={() => handleOutput("+")}>
            +
          </p>
        </div>
        <div>
          <p onClick={() => handleOutput("00")}>00</p>
          <p onClick={() => handleOutput(0)}>0</p>
          <p onClick={() => handleOutput(".")}>.</p>
          <p className="symbol" onClick={() => handleCalculation()}>
            =
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Calculator;
