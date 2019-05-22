import React from "react";
import { Route } from "react-router-dom";
import BlogContainer from "./BlogContainer";
import AboutAuthor from "./AboutAuthor";
import ReadBlog from "./ReadBlog";
import ContactMe from "./ContactMe";
const Routes = props => {
  return (
    <div className="col-12">
      <Route exact path="/" component={BlogContainer} />
      <Route path="/about" component={AboutAuthor} />
      <Route path="/contact" component={ContactMe} />
      <Route path="/blog/:id" component={ReadBlog} />
    </div>
  );
};
export default Routes;
