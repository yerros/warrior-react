import React, { useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Post } from "../lib";
import { login } from "../redux/actions";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    Post("user/login", { email, password }).then((res) => {
      localStorage.setItem("token", res.token);
      props.signin(res.token);
      props.history.push("/");
    });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign In - MAD Warrior Team</title>
        <meta name="description" content="Sign in to MAD Warrior Team" />
      </Helmet>
      <div
        id="body"
        className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8"
      >
        <div className="w-full max-w-xs space-y-8 ">
          <div>
            <img
              className="w-auto h-12 mx-auto rounded-full"
              src="/img/mad-logo.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-4xl font-extrabold text-center text-pink-600">
              WARRIOR
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div className="text-sm">
                <button
                  href="#"
                  className="font-medium text-pink-600 hover:text-pink-500"
                >
                  Forgot your password?
                </button>
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleSignIn}
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-pink-600 border border-transparent rounded-md group hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* Heroicon name: solid/lock-closed */}
                  <svg
                    className="w-5 h-5 text-pink-500 group-hover:text-pink-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (token) => dispatch(login(token)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
