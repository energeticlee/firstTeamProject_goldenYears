import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import {useRouteMatch} from "react-router-dom"

const Tests = () =>{
    let { path } = useRouteMatch();

    return (
        <>
          <h1>This is View</h1>
          <Switch>
            <Route exact path={`${path}/chairstand`}>
              {/* <Chairstand/> */}
            </Route>

            <Route path={`${path}/armcurl`}>
              {/* <Armcurl/> */}
            </Route>

            <Route path={`${path}/myprofile`}>
              {/* <MyProfile /> */}
            </Route>

            <Route path={`${path}/tests`}>
              {/* <Tests /> */}
            </Route>
            {/* <Redirect to = "/404"/> */}

          </Switch>
          </>
      );
}

export default Tests