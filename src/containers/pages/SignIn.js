import { Spin } from "antd";
import Cookies from "js-cookie";
import logo from "../../imgs/logo.jpg";
import { Suspense, useState } from "react";
import { Navigate } from "react-router-dom";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const logInCheck = () => {
    if (username === "idkr37@gmail.com" && password === "quynh123") {
      Cookies.remove("userName");
      Cookies.remove("passWord");
      Cookies.remove("isLogged");
      Cookies.remove("decentralization");
      Cookies.set("userName", username);
      Cookies.set("passWord", password);
      Cookies.set("isLogged", true);
      Cookies.set("decentralization", "user");
      setLoggedIn(true);
    } else {
      Cookies.remove("userName");
      Cookies.remove("passWord");
      Cookies.remove("decentralization");
      Cookies.set("isLogged", false);
      setError("Invalid username or password!");
    }
  };
  if (loggedIn) {
    return <Navigate to="/dashboard" replace={true} />;
  }
  return (
    <Suspense
      fallback={
        <div className="spin flex items-center justify-center bg-white dark:bg-dark h-screen w-full fixed z-[999] ltr:left-0 rtl:right-0 top-0">
          <Spin />
        </div>
      }
    >
      <div class="flex items-center min-h-screen bg-white dark:bg-gray-900">
        <div class="container mx-auto">
          <div class="max-w-md mx-auto my-10">
            <div class="flex flex-wrap justify-center text-center">
              <img
                className="rounded-[50%] w-[100px] h-[100px] mb-[20px]"
                src={logo}
                alt=""
              />
              <p class="text-gray-500 dark:text-gray-400 w-[100%]">
                Sign in to access your account
              </p>
            </div>
            <div class="m-7">
              <form action="">
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                </div>
                <div class="mb-6">
                  <div class="flex justify-between mb-2">
                    <label
                      for="password"
                      class="text-sm text-gray-600 dark:text-gray-400"
                    >
                      Password
                    </label>
                    <a
                      href="#!"
                      class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && (
                  <div className="text-center text-red-700 mb-[20px] text-[20px]">
                    {error}
                  </div>
                )}
                <div className="mb-6" onClick={logInCheck}>
                  <div className="flex justify-center h-[40px] items-center w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                    Sign in
                  </div>
                </div>
                <p class="text-sm text-center text-gray-400">
                  Don&#x27;t have an account yet?{" "}
                  <a
                    href="#!"
                    class="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                  >
                    Sign up
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default SignIn;
