import React from "react";
import Header from "./Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { connect } from "react-redux";

function Layout(props) {
  return (
    <HelmetProvider>
      <div
        id="body"
        className="w-screen font-sans leading-normal tracking-normal text-gray-500 bg-gray-100"
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>{props.title || "No Title"} - MAD Warrior Team</title>
          <meta name="description" content={props.title || "No Title"} />
        </Helmet>
        <Header />
        <div className="container w-full min-h-screen pt-32 mx-auto text-base">
          {props.children}
        </div>
      </div>
    </HelmetProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};
export default connect(mapStateToProps)(Layout);
