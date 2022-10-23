import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Write here");
  const handleUPClick = () => {
    console.log("button clicked");
    setText(text.toUpperCase());
  };
  const handleLOWClick = () => {
    console.log("button clicked");
    setText(text.toLowerCase());
  };
  const handleOnChange = (textOnScreen) => {
    console.log("changed");
    setText(textOnScreen.target.value);
  };
  return (
    <>
      <div className="row">
        <div className="col-5">
          <h1 className="mb-2">{props.heading}</h1>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              style={{ height: "200px", resize: "none" }}
              defaultValue={text}
              // ! Reason behind using default value is not to make change on the primary textarea
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-info mt-3 text-white mx-2"
            onClick={handleUPClick}
          >
            UpperCase
          </button>
          <button
            type="button"
            className="btn btn-info mt-3 text-white"
            onClick={handleLOWClick}
          >
            LowerCase
          </button>
          <div className="mt-3">
            <p>Number of Characters - {text.split(" ").length}</p>
            <p>Number of Words - {text.length}</p>
            <p>
              Approx Reading Time - {0.008 * text.split(" ").length} Minutes
            </p>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <h1 className="mb-2">Preview</h1>
          <p>{text}</p>
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
