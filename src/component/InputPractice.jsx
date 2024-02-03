import React, { useState } from "react";
import CrossImg from "../images/cross.png";
const InputPractice = () => {
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setHistory((prevHistory) => [...prevHistory, value]);
      setValue("");
    }
  };
  const handleRemove = (index) => {
    const updatedHistory = history.filter((_, i) => i !== index);
    setHistory(updatedHistory);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="bg-black px-5 pt-5 mt-5">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="input_id"
            className="d-flex flex-wrap input_parent bg-white"
          >
            {history &&
              history.map((entry, index) => (
                <span
                  id="outputSpan"
                  className="input_text text-black m-1 position-relative"
                  key={index}
                >
                  <span
                    className="text-black position-absolute cursor_pointer cross_img"
                    onClick={() => handleRemove(index)}
                  >
                    <img
                      src={CrossImg}
                      alt="CrossImg"
                      width="10px"
                      height="10px"
                    />
                  </span>
                  <span>{entry} </span>
                </span>
              ))}

            <input
              type="text"
              className="p-2 fs-4 fw-bold"
              value={value}
              onChange={handleChange}
              onKeyUp={handleEnter}
              id="input_id"
            />
          </label>
        </form>
      </div>
    </>
  );
};

export default InputPractice;
