import React from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../../App";
import style from "./patientLogin.module.css";

const DocReg = () => {
  const data = useContext(dataContext);
  const dispatch = data.dispatch;
  const docHistory = useHistory();

  const handleSubmitDocData = (event) => {
    event.preventDefault();

    const docName = event.target.name.value;
    const docEmail = event.target.email.value;
    const docConfirmEmail = event.target.confirm_email.value;
    const docPassword = event.target.password.value;
    const docConfirmPW = event.target.confirm_password.value;

    if (docConfirmEmail != docEmail) {
      alert("Email addresses don't match, please enter again.");
    }

    if (docConfirmPW != docPassword) {
      alert("Passwords don't match, please enter again.");
    }

    const sendData = async () => {
      // Please change the localhost number according to your server port number
      const response = await fetch("/api/doctor", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          name: docName,
          email: docEmail.toLowerCase(),
          password: docPassword,
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
        dispatch({ type: "PUSHDOCTORID", payload: data._id });
        alert("You have successfully registered!");
        docHistory.push("/doctorHome");
      }
    };
    sendData();
  };

  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.loginContainer}>
          <form onSubmit={handleSubmitDocData}>
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
              <label className="label is-size-4 has-text-centered">
                Email:
              </label>
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
              <label className="label is-size-4 has-text-centered">
                Password:
              </label>
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
        </div>
      </div>
    </>
  );
};

export default DocReg;
