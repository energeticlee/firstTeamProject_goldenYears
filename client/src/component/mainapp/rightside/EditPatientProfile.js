// /* eslint-disable */
import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { dataContext } from "../../../App";
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min';
// import "~bulma-calendar/dist/css/bulma-calendar.min.css"

const EditPatientProfile = () => {
  const data = useContext(dataContext);
  const userId = data.states.userId;
  const [userElement, setUserElement] = useState({});

  const dispatch = data.dispatch;
  const history = useHistory();

  useEffect(() => {
    if (Object.keys(data.states).length === 0) {
      console.log(Object.keys(data.states).length === 0);
      const getData = async () => {
        // Please change the localhose number according to your server port number
        const response = await fetch("/api/session", {
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const message = await response.json();
        if (message.error !== "Not Authenticated") {
          dispatch({ type: "PUSHPATIENTID", payload: message });
        } else {
          history.push("/");
        }
      };
      getData();
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/api/user/${userId}`, {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();

      setUserElement(data);
    };
    getData();
  }, [userId]);

  useEffect(() => {
    // Initialize all input of date type.
    const calendars = bulmaCalendar.attach('[type="date"]', {});

    // Loop on each calendar initialized
    calendars.forEach((calendar) => {
      // Add listener to date:selected event
      calendar.on('date:selected', (date) => {
        console.log(date);
      });
    });

    // To access to bulmaCalendar instance of an element
    // eslint-disable-next-line no-undef
    const element = document.querySelector('#dob');
    if (element) {
      // bulmaCalendar instance is available as element.bulmaCalendar
      element.bulmaCalendar.on('select', (datepicker) => {
        console.log(datepicker.data.value());
      });
    }
  }, []);

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
        if (i === 9) {
          updatedUser[`${event.target[`${i}`].id}`] = oldValue.email;
        } else {
          updatedUser[`${event.target[`${i}`].id}`] = oldValue;
        }
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
              // required
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
              // required
            />
            <br />
            <br />
            <label>Password:</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
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
            <label>Date of Birth:</label>
            <br />
            <input name = "age" id="age" type="date" />
            {/* <input
              type="number"
              name="age"
              id="age"
              placeholder={userElement.age ? userElement.age : "DD/MM/YYYY"}
              //   required
            /> */}
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
              placeholder={
                userElement.myDoctor === null ? "" : userElement.myDoctor.email
              }
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
