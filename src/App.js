import React from "react";
import "./App.css";
import Header from "./components/Header";
import BlogContainer from "./components/BlogContainer";
import "./index.css";
import axios from "axios";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Signup from "./components/Signup";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogs: [] };
    this.componentDidMount = async () => {
      let arr = [];
      try {
        let response = await axios.get("http://localhost:5000/api/blog");
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
      <Provider store={createStore(rootReducer, { blogs: this.state })}>
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
          <div className="container" style={{ height: "100%" }}>
            <div
              style={{
                display: "flex",
                height: "100%",
                flexDirection: "column"
              }}
            >
              <div>
                <h2 className="col-lg-3 col-sm-12 blogTitle">Example Blog</h2>
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
                  <BlogContainer />
                </div>
                <div className="col-lg-4 col-sm-12">
                  <Signup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

// https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg
