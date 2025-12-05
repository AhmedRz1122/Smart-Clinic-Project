import React from "react";
import { Link } from "react-router-dom";

const Loginpage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Sign in</h1>
        <p className="text-gray-400 mb-6">Enter your email below to sign in</p>

        <input
          type="email"
          placeholder="name@example.com"
          className="w-full px-4 py-3 rounded-md bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 mt-4 rounded-md bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button className="w-full mt-4 py-3 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium">
          Sign In with Email
        </button>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-neutral-700"></div>
          <span className="px-3 text-gray-400">Or continue with</span>
          <div className="flex-grow h-px bg-neutral-700"></div>
        </div>

        <button className="w-full py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white flex items-center justify-center gap-2 hover:bg-neutral-800">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="w-5 h-5"
          />
          GitHub
        </button>

        <p className="text-gray-500 text-sm mt-6">
          Don't have an account?{" "}
          <Link className="underline text-green-500 hover:text-green-400" to="/register">
            Sign up
          </Link>
        </p>

        <p className="text-gray-500 text-sm mt-4">
          By clicking continue, you agree to our{" "}
          <a className="underline" href="#">
            Terms of Service
          </a>{" "}
          and{" "}
          <a className="underline" href="#">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
