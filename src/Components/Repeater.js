import React from "react";

const Repeater = ({ count, input }) => {
  var multiples = [];
  for (var i = 0; i < count; i++) {
    multiples.push(input);
  }
  return (
    <>
      {multiples.map((input, index) => (
        <div key={index}>{input}</div>
      ))}
    </>
  );
};

export default Repeater;
