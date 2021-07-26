import React from "react";

const PatientLogin = () => {
  //   const handleUserLogin = (event) => {
  //     event.preventDefault();
  //     const userEmail = event.target.email.value;
  //     const userPassword = event.target.password.value;

  //     const sendData = async () => {
  //       // Please change the localhose number according to your server port number
  //       const response = await fetch("http://localhost:3001/api/user", {
  //         method: "POST",
  //         mode: "cors",
  //         body: JSON.stringify({
  //           name: userName,
  //           email: userEmail,
  //           password: userPassword,
  //         }),
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //     };
  //     sendData();
  //   };
  return (
    <div>
      <form>
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
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
          placeholder="Enter password"
          required
        />
        <br />
        <br />
        <input type="submit" value="Enter" />
      </form>
    </div>
  );
};

export default PatientLogin;
