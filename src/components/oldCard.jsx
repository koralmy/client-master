

const CardTest = () => {
  const peopleArray = {
    people: [
      { name: "John", age: 21 },
      { name: "Dana", age: 32 },
      { name: "Gil", age: 47 },
      { name: "Lia", age: 19 },
    ],
  };

  const nameStyle = {
       color: "blue",
  };

  const ageStyle = {
       color: "purple",
  };


  return (
    <>
      <h1>רשימת אנשים</h1>
      <ul>
        {peopleArray.people.map((person, index) => (
          <li key={index}>
            <span style={nameStyle}> Name: {person.name}</span> -{" "}
            <span style={ageStyle}> Age: {person.age}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CardTest;
