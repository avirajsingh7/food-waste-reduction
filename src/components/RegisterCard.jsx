import { useState } from "react";
import logo from "../assets/logo/logo.ico";
function RegisterCard(props) {

  function handleLoginButtonClick() {
    props.isRegisterCardVisible((prevValue) => {
      return !prevValue;
    });
    props.isLoginCardVisible((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div>
      <div className="blur-background"></div>
      <div className=" login-card flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex">
              <input
                id="privacy-policy"
                name="privacy-policy"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-hoverColor border-gray-300 rounded"
              />
              <label
                htmlFor="privacy-policy"
                className="ml-2 block text-sm text-gray-900 text-xs"
              >
                I agree to WasteZero's{" "}
                <span className="text-primary hover:text-hoverColor">
                  Terms of Service
                </span>
                ,
                <span className="text-primary hover:text-hoverColor">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="text-primary hover:text-hoverColor">
                  Content Policies
                </span>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full  justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hoverColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Create account
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <span
              onClick={handleLoginButtonClick}
              className="font-semibold leading-6 text-primary hover:text-hoverColor cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterCard;
