import React from "react";
import "./App.css";
import Header from "./components/Header";
import "./index.css";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Signup from "./components/Signup";
import Author from "./components/Author";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";
import reduxPromise from "redux-promise";
import Ads from "./components/Ads";
import Contact from "./components/Contact";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogs: [] };
  }
  render() {
    return (
      <Provider store={createStore(rootReducer, applyMiddleware(reduxPromise))}>
        <BrowserRouter>
          <div
            className="   App"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              flexWrap: "nowrap"
            }}
          >
            <Header />
            <div
              style={{ height: "100%", marginLeft: "3%", marginRight: "3%" }}
            >
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  flexDirection: "column"
                }}
              >
                <div>
                  <h2 className="col-lg-3 col-sm-12 blogTitle">
                    <u> Must Love Dogs</u>
                  </h2>
                </div>
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap"
                  }}
                >
                  <div className="col-lg-8 col-sm-12">
                    <Routes />
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <Signup />
                    <Author />
                    <Ads />
                    <Contact />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
