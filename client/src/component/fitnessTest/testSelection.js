import React from "react";
import style from "./TestLibrary.module.css";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router";

const testSelection = () => {
  let { path } = useRouteMatch();

  return (
    <div className={style.mainContainer}>
      <h1 className={style.title}>Testing Library</h1>
      <div className={style.testContainer}>
        <Link to={`${path}/chairstand`} className={style.test}>
          <h2 className={style.testText}>30-Second Chair Stand</h2>
        </Link>
        <Link to={`${path}/armcurl`} className={style.test}>
          <h2 className={style.testText}>Arm Curl</h2>
        </Link>
        <Link to={`${path}/twominsteptest`} className={style.test}>
          <h2 className={style.testText}>2-Minute Step Test</h2>
        </Link>
      </div>
    </div>
  );
};

export default testSelection;
