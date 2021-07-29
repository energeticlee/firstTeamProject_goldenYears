import React from "react";

const MyDoctor = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <h1>My doctor Page</h1>
      <form onSumbit={handleSubmit}>
        <input placheholder="Doctor email"></input>
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default MyDoctor;
