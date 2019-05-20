import React from "react";
import { Link, Route } from "react-router-dom";
import BlogContainer from "./BlogContainer";
import AboutAuthor from "./AboutAuthor";
import ReadBlog from "./ReadBlog";
const Routes = props => {
  return (
    <div className="col-12">
      <Route exact path="/" component={BlogContainer} />
      <Route path="/about" component={AboutAuthor} />
      <Route path="/blog/:id" component={ReadBlog} />
    </div>
  );
};
export default Routes;
