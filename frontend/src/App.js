import React from "react";
import {Switch, Route, useLocation} from "react-router-dom"
import {useTransition, animated} from "react-spring"
import RegisterForm from "./components/RegisterForm"
import LoginForm from "./components/LoginForm"
import NewPost from "./components/NewPost"
import "./components/styles.css"



export default function App() {
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate3d(0%,200%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(0%,-200%,0)" },
  })


  return transitions.map(({ item: location, props, key }) => (
        <animated.div className="scroll" key={key} style={props}>
          <Switch>
            <Route path="/Register" component={RegisterForm} />
            <Route path="/" exact component={LoginForm} />
            <Route path="/New" component={NewPost} />
          </Switch>
        </animated.div>
    ))
}