import React from "react";
import UseName from "./UseName"; 

const CustomNameHook = () => {
  const { name, setName } = UseName("Initial Name");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h2>Name: {name}</h2>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
  );
};

export default CustomNameHook;
