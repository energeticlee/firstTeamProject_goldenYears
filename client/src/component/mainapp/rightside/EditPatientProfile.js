/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const EditPatientProfile = (props) => {
  const userId = props.currentUser;
  const [userElement, setUserElement] = useState({});
  const history = useHistory();
  useEffect(() => {
    let mounted = true;
    const getData = async () => {
      const response = await fetch(`/api/user/${userId}`, {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      if (mounted) {
        setUserElement(data);
      }
    };
    getData();
    return () => (mounted = false);
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedUser = {};
    const eventKeys = Object.keys(event.target);
    for (let i = 0; i < eventKeys.length - 3; i++) {
      const oldValue = userElement[`${event.target[`${i}`].id}`];
      const newValue = event.target[`${i}`].value;
      if (newValue === "" && oldValue === undefined) {
        updatedUser[`${event.target[`${i}`].id}`] = undefined;
      } else if (newValue === "") {
        updatedUser[`${event.target[`${i}`].id}`] = oldValue;
      } else {
        updatedUser[`${event.target[`${i}`].id}`] = event.target[`${i}`].value;
      }
    }
    console.log(updatedUser);
    const updateData = async () => {
      const response = await fetch(`/api/user/${userId}`, {
        mode: "cors",
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      history.push("/home/myprofile");
    };
    updateData();
  };
  return (
    <>
      {Object.keys(userElement).length === 0 ? (
        " "
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              placeholder={userElement.name}
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
              placeholder={userElement.email}
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
              placeholder={userElement.password}
              //   required
            />
            <br />
            <br />
            <label>Photo:</label>
            <br />
            <input
              type="file"
              name="photo"
              id="photo"
              placeholder={userElement.photo}
              accept="image/png. image/jpeg"
              //   required
            />
            <br />
            <br />
            <label>Age:</label>
            <br />
            <input
              type="number"
              name="age"
              id="age"
              placeholder={userElement.age}
              //   required
            />
            <br />
            <br />
            <label>Gender:</label>
            <br />
            <input
              type="text"
              name="gender"
              id="gender"
              placeholder={userElement.gender}
              //   required
            />
            <br />
            <br />
            <label>Height:</label>
            <br />
            <input
              type="number"
              name="height"
              id="height"
              placeholder={userElement.height}
              //   required
            />
            <br />
            <br />
            <label>Weight:</label>
            <br />
            <input
              type="number"
              name="weight"
              id="weight"
              placeholder={userElement.weight}
              //   required
            />
            <br />
            <br />
            <label>Health Conditions:</label>
            <br />
            <input
              type="text"
              name="healthCondition"
              id="healthCondition"
              placeholder={userElement.healthCondition}
              //   required
            />
            <br />
            <br />
            <label>My Doctor:</label>
            <br />
            <input
              type="text"
              name="myDoctor"
              id="myDoctor"
              placeholder={userElement.myDoctor.email}
              //   required
            />
            <br />
            <br />
            <input type="submit" value="Save Changes" />
          </form>
        </div>
      )}
    </>
  );
};

export default EditPatientProfile;
