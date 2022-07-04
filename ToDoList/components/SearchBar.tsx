import React, { useRef, useState } from "react";

const SearchBar = ({ text, setText }) => {
  const [inputs, setInputs] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
    setInputs(e.target.value);
  };

  const addData = (e) => {
    if (e.key === "Enter") {
      setText(e.target.value);
      setInputs("");
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-black hover:bg-teal"
        value={inputs}
        placeholder=" Search Here ... "
        onChange={onChange}
        onKeyPress={addData}
      />
    </form>
  );
};

export default SearchBar;
