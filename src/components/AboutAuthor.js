import React from "react";
import "./index.css";
const AboutAuthor = props => {
  return (
    <div className="col-12 blogContainer">
      <div
        className="col-12"
        style={{
          marginBottom: "5%",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          backgroundColor: "white"
        }}
      >
        <div
          className="display-4"
          style={{
            alignSelf: "flex-start",
            fontFamily: "Marker Felt, fantasy"
          }}
        >
          About Ashley
        </div>
        <br />

        <br />
        <div className="jumbotron jumbotron-fluid" style={{ height: "auto" }}>
          <div className="container">
            <blockquote className="blockquote text-center">
              <p className="mb-0">
                <i>
                  “The award-winning Must Love Dogs has become hugely popular.
                  Her posts tackle all Dog problems: behavior, nutrition,
                  activities, illnesses and food”
                </i>
              </p>
              <footer className="blockquote-footer">
                Someone important in{" "}
                <cite title="Source Title">Something Reputable</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <p style={{ textAlign: "left" }}>
          Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Commodo
          nulla facilisi nullam vehicula ipsum a arcu cursus. Tellus in hac
          habitasse platea dictumst vestibulum.
        </p>
        <br />
        <p style={{ textAlign: "left" }}>
          Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.
          Elementum nibh tellus molestie nunc non blandit massa. Purus semper
          eget duis at tellus at urna. In hac habitasse platea dictumst. Amet
          consectetur adipiscing elit ut aliquam purus. Egestas tellus rutrum
          tellus pellentesque eu tincidunt.
        </p>
        <br />

        <p style={{ textAlign: "left" }}>
          Amet aliquam id diam maecenas. Habitasse platea dictumst quisque
          sagittis.{" "}
        </p>
        <br />
        <p style={{ textAlign: "left" }}>
          Praesent elementum facilisis leo vel fringilla est ullamcorper eget.
          Nisi est sit amet facilisis magna. Laoreet sit amet cursus sit.
          Convallis convallis tellus id interdum. Sed faucibus turpis in eu mi
          bibendum neque egestas. Ipsum faucibus vitae aliquet nec ullamcorper.
          Commodo ullamcorper a lacus vestibulum sed arcu. Aliquam purus sit
          amet luctus venenatis lectus magna fringilla urna. Proin fermentum leo
          vel orci porta. Ligula ullamcorper malesuada proin libero nunc
          consequat interdum varius sit. Adipiscing at in tellus integer feugiat
          scelerisque. Libero justo laoreet sit amet cursus sit amet. Eu
          ultrices vitae auctor eu augue ut lectus arcu. In arcu cursus euismod
          quis. Viverra nibh cras pulvinar mattis nunc sed blandit. Aliquet
          sagittis id consectetur purus ut faucibus pulvinar elementum. Augue ut
          lectus arcu bibendum at varius. Enim lobortis scelerisque fermentum
          dui faucibus in ornare quam viverra.
        </p>
      </div>
    </div>
  );
};
export default AboutAuthor;
