import React from "react";
import "./App.css";
import Header from "./components/Header";
import BlogContainer from "./components/BlogContainer";
import "./index.css";
import axios from "axios";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Signup from "./components/Signup";
import Author from "./components/Author";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";
import reduxPromise from "redux-promise";
let baseUrl = process.env.REACT_APP_BASEURL || "http://localhost:5000";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogs: [] };
    this.componentDidMount = async () => {
      let arr = [];
      try {
        let response = await axios.get(`${baseUrl}/api/blog`);
        response.data.map(item => {
          arr.push(item);
        });
        this.setState({ blogs: arr });
      } catch (err) {
        console.log(err);
      }
    };
  }
  render() {
    // const store = ;

    return (
      <Provider
        store={createStore(
          rootReducer,
          { blogs: this.state },
          applyMiddleware(reduxPromise)
        )}
      >
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
            {" "}
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
                    Must Love Dogs
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
                    {/* <BlogContainer /> */}
                    <Routes />
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <Signup />
                    <Author />
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

// https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg
