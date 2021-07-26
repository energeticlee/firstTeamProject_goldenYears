import React from "react";
// import { useRef } from "react-router-dom";

const PatientReg = () => {
  const handleSubmitUserData = (event) => {
    event.preventDefault();
    const userName = event.target.name.value;
    const userEmail = event.target.email[0].value;
    const userPassword = event.target.password[0].value;
    const sendData = async () => {
      // Please change the localhose number according to your server port number
      const response = await fetch("http://localhost:3001/api/user", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          name: userName,
          email: userEmail,
          password: userPassword,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    };
    sendData();
  };
  return (
    <div>
      <form onSubmit={handleSubmitUserData}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Smith"
          required
        />
        <br />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="johnsmith@gmail.com"
          required
        />
        <br />
        <br />
        <label>Confirm email:</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="johnsmith@gmail.com"
          required
        />
        <br />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="************"
          required
        />
        <br />
        <br />
        <label>Confirm password:</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="************"
          required
        />
        <br />
        <br />
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default PatientReg;
