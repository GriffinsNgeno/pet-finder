import React from "react";
import { useNavigate } from "react-router-dom";

function Login(Login, setLogIn) {
  const navigate = useNavigate()
  return (
    <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="data:image/png;base64,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"
              className="w-full"
              alt="pet"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form>
                <h1>LOG IN</h1>
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-cyan-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck3"
                    checked
                  />
                  <label
                    className="form-check-label inline-block text-yellow-800"
                    for="exampleCheck2"
                  >
                    Save log in info
                  </label>
                </div>
                <a
                  href="#!"
                  className="text-darkblue-500 hover:text-yellow-700 focus:text-yellow-700 active:text-yellow-800 duration-200 transition ease-in-out"
                >
                  Forgotten password?
                </a>
              </div>

              <button
              onClick={() => {
                navigate("/Home");
                setLogIn(false);
              }}
                type="submit"
                className="inline-block px-7 py-3 bg-yellow-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
               
              >
                {Login ? "Login" : "LogOut"}
              </button>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
                
              </div>

              <a
                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                style={{backgroundColor: "#55ac"}}
                href="https://www.facebook.com/"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-3.5 h-3.5 mr-2"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
                Continue with Facebook
              </a>
              <a
                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                style={{backgroundColor: "#55ac"}}
                href="https://www.twitter.com/"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-3.5 h-3.5 mr-2"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  />
                </svg>
                Continue with Twitter
              </a>

              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Login;