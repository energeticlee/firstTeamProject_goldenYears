// /* eslint-disable */
import React from "react";
import Graph1 from "../../mainapp/rightside/graphs/Graph1";
import Graph2 from "../../mainapp/rightside/graphs/Graph2";
import Graph3 from "../../mainapp/rightside/graphs/Graph3";
import Graph4 from "../../mainapp/rightside/graphs/Graph4";
import { dataContext } from "../../../App";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";

const PatientPerformance = () => {
  const [time1, setTime1] = useState({ number: 10, mode: "year" });
  const [display1, setDisplay1] = useState("All-time");
  const [time2, setTime2] = useState({ number: 10, mode: "year" });
  const [display2, setDisplay2] = useState("All-time");
  const [time3, setTime3] = useState({ number: 10, mode: "year" });
  const [display3, setDisplay3] = useState("All-time");
  const [time4, setTime4] = useState({ number: 10, mode: "year" });
  const [display4, setDisplay4] = useState("All-time");

  const { id } = useParams();
  const data = useContext(dataContext);
  const dispatch = data.dispatch;
  const history = useHistory();
  useEffect(() => {
    if (Object.keys(data.states).length === 0) {
      console.log(Object.keys(data.states).length === 0);
      const getData = async () => {
        // Please change the localhose number according to your server port number
        const response = await fetch("/api/doctorsession", {
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const message = await response.json();
        if (message.error !== "Not Authenticated") {
          dispatch({ type: "PUSHDOCTORID", payload: message._id });
        } else {
          history.push("/");
        }
      };
      getData();
    }
  }, []);

  const sevendays1 = () => {
    setTime1({ number: 7, mode: "days" });
    setDisplay1("Past 7 days");
  };
  const onemonth1 = () => {
    setTime1({ number: 1, mode: "month" });
    setDisplay1("Past 1 month");
  };

  const threemonth1 = () => {
    setTime1({ number: 3, mode: "month" });
    setDisplay1("Past 3 months");
  };
  const sixmonth1 = () => {
    setTime1({ number: 6, mode: "month" });
    setDisplay1("Past 6 months");
  };
  const oneyear1 = () => {
    setTime1({ number: 1, mode: "year" });
    setDisplay1("Past 1 year");
  };
  const alltime1 = () => {
    setTime1({ number: 10, mode: "year" });
    setDisplay1("All-time");
  };

  const sevendays2 = () => {
    setTime2({ number: 7, mode: "days" });
    setDisplay2("Past 7 days");
  };
  const onemonth2 = () => {
    setTime2({ number: 1, mode: "month" });
    setDisplay2("Past 1 month");
  };

  const threemonth2 = () => {
    setTime2({ number: 3, mode: "month" });
    setDisplay2("Past 3 months");
  };
  const sixmonth2 = () => {
    setTime2({ number: 6, mode: "month" });
    setDisplay2("Past 6 months");
  };
  const oneyear2 = () => {
    setTime2({ number: 1, mode: "year" });
    setDisplay2("Past 1 year");
  };
  const alltime2 = () => {
    setTime2({ number: 10, mode: "year" });
    setDisplay2("All-time");
  };

  //THREE
  const sevendays3 = () => {
    setTime3({ number: 7, mode: "days" });
    setDisplay3("Past 7 days");
  };
  const onemonth3 = () => {
    setTime3({ number: 1, mode: "month" });
    setDisplay3("Past 1 month");
  };

  const threemonth3 = () => {
    setTime3({ number: 3, mode: "month" });
    setDisplay3("Past 3 months");
  };
  const sixmonth3 = () => {
    setTime3({ number: 6, mode: "month" });
    setDisplay3("Past 6 months");
  };
  const oneyear3 = () => {
    setTime3({ number: 1, mode: "year" });
    setDisplay3("Past 1 year");
  };
  const alltime3 = () => {
    setTime3({ number: 10, mode: "year" });
    setDisplay3("All-time");
  };

  //FOUR
  const sevendays4 = () => {
    setTime4({ number: 7, mode: "days" });
    setDisplay4("Past 7 days");
  };
  const onemonth4 = () => {
    setTime4({ number: 1, mode: "month" });
    setDisplay4("Past 1 month");
  };

  const threemonth4 = () => {
    setTime4({ number: 3, mode: "month" });
    setDisplay4("Past 3 months");
  };
  const sixmonth4 = () => {
    setTime4({ number: 6, mode: "month" });
    setDisplay4("Past 6 months");
  };
  const oneyear4 = () => {
    setTime4({ number: 1, mode: "year" });
    setDisplay4("Past 1 year");
  };
  const alltime4 = () => {
    setTime4({ number: 10, mode: "year" });
    setDisplay4("All-time");
  };
  return (
    <>
      <div className="myperformance-graphs-container">
        <div className="columns">
          <div className="myperformance-graphs column">
            <h2 className="is-size-4">30-Second Chair Stand Graph</h2>
            <p>{display1}</p>
            <br></br>
            <Graph1 data={id} time={time1} />
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>Time Range</span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <div className="buttons">
                    <a className="dropdown-item" onClick={sevendays1}>
                      Past 7 days
                    </a>
                    <a className="dropdown-item" onClick={onemonth1}>
                      Past 1 month
                    </a>
                    <a className="dropdown-item" onClick={threemonth1}>
                      Past 3 months
                    </a>
                    <a className="dropdown-item" onClick={sixmonth1}>
                      Past 6 months
                    </a>
                    <a className="dropdown-item" onClick={oneyear1}>
                      Past 1 year
                    </a>
                    <a className="dropdown-item" onClick={alltime1}>
                      All-time
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="myperformance-graphs column">
            <h2 className="is-size-4">Arm Curl Test Graph</h2>
            <p>{display2}</p>
            <br></br>
            <Graph2 data={id} time={time2} />
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>Time Range</span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <div className="buttons">
                    <a className="dropdown-item" onClick={sevendays2}>
                      Past 7 days
                    </a>
                    <a className="dropdown-item" onClick={onemonth2}>
                      Past 1 month
                    </a>
                    <a className="dropdown-item" onClick={threemonth2}>
                      Past 3 months
                    </a>
                    <a className="dropdown-item" onClick={sixmonth2}>
                      Past 6 months
                    </a>
                    <a className="dropdown-item" onClick={oneyear2}>
                      Past 1 year
                    </a>
                    <a className="dropdown-item" onClick={alltime2}>
                      All-time
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="myperformance-graphs column">
            <h2 className="is-size-4">2-Minute Step Graph</h2>
            <p>{display3}</p>
            <br></br>
            <Graph3 data={id} time={time3} />
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>Time Range</span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <div className="buttons">
                    <a className="dropdown-item" onClick={sevendays3}>
                      Past 7 days
                    </a>
                    <a className="dropdown-item" onClick={onemonth3}>
                      Past 1 month
                    </a>
                    <a className="dropdown-item" onClick={threemonth3}>
                      Past 3 months
                    </a>
                    <a className="dropdown-item" onClick={sixmonth3}>
                      Past 6 months
                    </a>
                    <a className="dropdown-item" onClick={oneyear3}>
                      Past 1 year
                    </a>
                    <a className="dropdown-item" onClick={alltime3}>
                      All-time
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="myperformance-graphs column">
            <h2 className="is-size-4">Overall Performance Graph</h2>
            <p>{display4}</p>
            <br></br>
            <Graph4 data={id} time={time4} />
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>Time Range</span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <div className="buttons">
                    <a className="dropdown-item" onClick={sevendays4}>
                      Past 7 days
                    </a>
                    <a className="dropdown-item" onClick={onemonth4}>
                      Past 1 month
                    </a>
                    <a className="dropdown-item" onClick={threemonth4}>
                      Past 3 months
                    </a>
                    <a className="dropdown-item" onClick={sixmonth4}>
                      Past 6 months
                    </a>
                    <a className="dropdown-item" onClick={oneyear4}>
                      Past 1 year
                    </a>
                    <a className="dropdown-item" onClick={alltime4}>
                      All-time
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <b>30-Second Chair Stand Graph</b>
      <p>{display1}</p>
      <button onClick={sevendays1}>Past 7 days</button>
      <button onClick={onemonth1}>Past 1 month</button>
      <button onClick={threemonth1}>Past 3 months</button>
      <button onClick={sixmonth1}>Past 6 months</button>
      <button onClick={oneyear1}>Past 1 year</button>
      <button onClick={alltime1}>All-time</button>
      <br></br>
      <Graph1 data={id} time={time1} />
      <b>Arm Curl Test Graph</b>
      <p>{display2}</p>
      <button onClick={sevendays2}>Past 7 days</button>
      <button onClick={onemonth2}>Past 1 month</button>
      <button onClick={threemonth2}>Past 3 months</button>
      <button onClick={sixmonth2}>Past 6 months</button>
      <button onClick={oneyear2}>Past 1 year</button>
      <button onClick={alltime2}>All-time</button>
      <br></br>
      <Graph2 data={id} time={time2} />
      <b>2-Minute Step Graph</b>
      <p>{display3}</p>
      <button onClick={sevendays3}>Past 7 days</button>
      <button onClick={onemonth3}>Past 1 month</button>
      <button onClick={threemonth3}>Past 3 months</button>
      <button onClick={sixmonth3}>Past 6 months</button>
      <button onClick={oneyear3}>Past 1 year</button>
      <button onClick={alltime3}>All-time</button>
      <br></br>
      <Graph3 data={id} time={time3} />
      <b>Overall Performance Graph</b>
      <p>{display4}</p>
      <button onClick={sevendays4}>Past 7 days</button>
      <button onClick={onemonth4}>Past 1 month</button>
      <button onClick={threemonth4}>Past 3 months</button>
      <button onClick={sixmonth4}>Past 6 months</button>
      <button onClick={oneyear4}>Past 1 year</button>
      <button onClick={alltime4}>All-time</button>
      <br></br>
      <Graph4 data={id} time={time4}/> */}
    </>
  );
};

export default PatientPerformance;
