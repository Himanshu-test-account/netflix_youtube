import React from "react";
import Layout from "../Layout/Layout";
import { Input } from "../Components/UsedInputs"; // Import the custom Input component
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

function Register() {
  return (
    <Layout>
      <div className="container mx-auto px-4 my-24 flex justify-center items-center">
        <div className="w-full md:w-3/5 lg:w-1/3 gap-8 flex flex-col p-12 bg-gray-100 rounded-lg border border-gray-300 shadow-lg">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-full h-12 object-contain mb-8"
          />
          <Input
            label="FullName"
            placeholder="netflix"
            type="text"
            bg={true} // You can set bg to true for bg-main or false for bg-dry
          />
          <Input
            label="Email"
            placeholder="netflix@gmail.com"
            type="email"
            bg={true} // You can set bg to true for bg-main or false for bg-dry
          />
          <Input
            label="Password"
            placeholder="**********"
            type="password"
            bg={false} // Set bg to false for bg-dry
          />
          <Link
            to="/dashboard"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            <FiLogIn /> Sign Up
          </Link>
          <p className="text-center text-border">
            Already have an Account?{" "}
            <Link to="/login" className="text-dryGray font-semibold ml-2">
              {" "}
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
