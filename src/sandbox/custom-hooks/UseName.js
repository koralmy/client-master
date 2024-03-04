import { useState } from "react";

const UseName = (initialName) => {
  const [name, setName] = useState(initialName);

  return {
    name,
    setName,
  };
};

export default UseName;
