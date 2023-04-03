import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Write here");
  const [textareaText, setTextareaText] = useState("Write here");
  // ? Functions
  const handleUPClick = () => {
    setText(text.toUpperCase());
    props.alert("Upper Case Converted", "success");
  };
  const handleLOWClick = () => {
    setText(text.toLowerCase());
    props.alert("Lower Case Converted", "success");
  };
  const handleUndClick = () => {
    setText(text.split(" ").join("_"));
    props.alert("Underscored placed", "success");
  };
  const clearText = () => {
    setText("");
    setTextareaText("");
    props.alert("Text Cleared", "warning");
  };
  const copyText = () => {
    const input = document.getElementById("floatingTextarea");
    input.select();
    navigator.clipboard.writeText(input.value);
  };
  const handleOnChange = (textOnScreen) => {
    console.log("changed");
    console.log(textOnScreen.target.value);
    setText(textOnScreen.target.value);
    setTextareaText(textOnScreen.target.value);
  };

  return (
    <>
      <div className="container mt-3" style={{ color: props.textColor }}>
        <div className="row">
          <div className="col-5">
            <h1 className="mb-2">{props.heading}</h1>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                style={{ height: "200px", resize: "none" }}
                value={textareaText}
                // ! Reason behind using default value is not to make change on the primary textarea
                onChange={handleOnChange}
              ></textarea>
            </div>
            <button
              type="button"
              className="btn btn-info mt-3 text-white mx-1"
              onClick={handleUPClick}
            >
              UpperCase
            </button>
            <button
              type="button"
              className="btn btn-info mt-3 text-white mx-2"
              onClick={handleLOWClick}
            >
              LowerCase
            </button>
            <button
              type="button"
              className="btn btn-info mt-3 text-white mx-2"
              onClick={handleUndClick}
            >
              Add UnderScore
            </button>
            <button
              type="button"
              className="btn btn-info mt-3 text-white mx-2"
              onClick={clearText}
            >
              Clear Text
            </button>
            <button
              type="button"
              className="btn btn-info mt-3 text-white mx-2"
              onClick={copyText}
            >
              Copy Text
            </button>
            <div className="mt-3">
              <p>Number of Characters-{text.length}</p>
              <p>
                Number of Words -{" "}
                {
                  text.split(" ").filter((char) => {
                    return char !== "";
                  }).length
                }
              </p>
              <p>
                Approx Reading Time -
                {0.008 *
                  text.split(" ").filter((char) => {
                    return char !== "";
                  }).length}{" "}
                Minutes
              </p>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-5">
            <h1 className="mb-2">Preview</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

TextForm.protoTypes = {
  heading: PropTypes.string.isRequired,
};
TextForm.defaultProps = {
  heading: "Heading",
};
