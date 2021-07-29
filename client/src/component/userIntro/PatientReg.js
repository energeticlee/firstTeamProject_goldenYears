import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { dataContext } from "../../App";

const PatientReg = () => {
  const data = useContext(dataContext);
  const history = useHistory();
  const dispatch = data.dispatch;

  const handleSubmitPatientData = (event) => {
    event.preventDefault();

    const patientName = event.target.name.value;
    const patientEmail = event.target.email.value;
    const patientConfirmEmail = event.target.confirm_email.value;
    const patientPassword = event.target.password.value;
    const patientConfirmPW = event.target.confirm_password.value;

    if (patientConfirmEmail != patientEmail) {
      alert("Email addresses don't match, please enter again.");
    }

    if (patientConfirmPW != patientPassword) {
      alert("Passwords don't match, please enter again.");
    }

    const sendData = async () => {
      // Please change the localhost number according to your server port number
      //* send get request to find if email has been taken
      const res = await fetch(
        `/api/user/validation/${patientEmail.toLowerCase()}`,
        {
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log("line 41", res.status);
      if (res.status === 400) {
        const data = await res.json();
        console.log("data 400", data.error);
      }
      if (res.status === 404) {
        const data = await res.json();
        console.log("Email Taken", data.error);
      } else if (res.status === 200) {
        console.log("it's inside!!!!");
        const response = await fetch("/api/user", {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({
            name: patientName,
            email: patientEmail.toLowerCase(),
            password: patientPassword,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        if (response.status === 400) {
          const data = await response.json();
          console.log("data", data.error);
        } else if (response.status === 200) {
          const data = await response.json();
          dispatch({ type: "PUSHPATIENTID", payload: data._id });
          alert("You have successfully registered!");
          history.push("/home/tests");
        }
      }
    };
    sendData();
  };

  return (
    <>
      <form onSubmit={handleSubmitPatientData}>
        <div className="field">
          <label className="label is-size-4 has-text-centered">Name:</label>
          <input
            className="input is-primary has-text-centered"
            type="text"
            name="name"
            id="name"
            placeholder="John Smith"
            required
          />
        </div>

        <div className="field">
          <label className="label is-size-4 has-text-centered">Email:</label>
          <input
            className="input is-primary has-text-centered"
            type="email"
            name="email"
            id="email"
            placeholder="johnsmith@gmail.com"
            required
          />
        </div>

        <div className="field">
          <label className="label is-size-4 has-text-centered">
            Confirm email:
          </label>
          <input
            className="input is-primary has-text-centered"
            type="email"
            name="confirm_email"
            id="confirm_email"
            placeholder="johnsmith@gmail.com"
            required
          />
        </div>

        <div className="field">
          <label className="label is-size-4 has-text-centered">Password:</label>
          <input
            className="input is-primary has-text-centered"
            type="password"
            name="password"
            id="password"
            placeholder="************"
            required
          />
        </div>

        <div className="field">
          <label className="label is-size-4 has-text-centered">
            Confirm password:
          </label>
          <input
            className="input is-primary has-text-centered"
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="************"
            required
          />
        </div>

        <br />
        <div className="field container">
          <div className="control">
            <button className="button is-link">Create Account</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PatientReg;
