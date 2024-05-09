import React, { useState } from "react";
import { Link } from "react-router-dom";
import vector from "../assets/Vector.png";
import close from "../assets/close.png";

const Getproject: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Function to handle input changes
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Validate email format
    if (!validateEmail(newEmail)) {
      setEmailError("Enter a valid email address");
    } else {
      setEmailError(""); // Clear error if email is valid
    }
  };

  // Function to validate email format
  const validateEmail = (email: string) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    if (!name.trim()) {
      // Name is empty
      // Show error message or handle as per your requirement
      return;
    }

    if (!validateEmail(email)) {
      // Invalid email format
      setEmailError("Please enter a valid email address");
      return;
    }

    // Form is valid, submit data or perform further actions
  };

  return (
    <div className="font-custom">
      <div className="flex px-[52px] py-[32px] justify-between items-center">
        <img src={vector} alt="vector logo" />
        <Link to="/">
          <img src={close} alt="close logo" />
        </Link>
      </div>
      <div className="flex flex-col mx-auto w-[588px] h-[588px]">
        <div>
          <p className="font-grace text-[36px] pb-4 text-center text-custom animate-fadeIn">
            Registration Form
          </p>
          <p
            className="text-[56px] w-[588px] font-semibold h-[178px] text-center animate-pulse"
            style={{ lineHeight: "67.2px" }}
          >
            Start your success Journey here!
          </p>
        </div>
        <form
          className="flex flex-col mx-auto mt-[62px] gap-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="w-[417px] h-[75px] py-6 pl-9 rounded-full text-black text-xl bg-gray-100"
            placeholder="Enter your name"
          />
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            className="w-[417px] h-[75px] py-6 pl-9 rounded-full text-black text-xl bg-gray-100"
            placeholder="Enter your email"
          />
          {submitted && emailError && (
            <p className="text-red-500 font-bold">{emailError}</p>
          )}
          <Link to="/congratulation">
            <button
              type="submit"
              className={`w-[417px] h-[75px] py-6 mt-[40px] text-white text-lg rounded-full bg-black ${
                (!name.trim() || !validateEmail(email)) &&
                "bg-gray-300 cursor-not-allowed"
              }`}
              disabled={!name.trim() || !validateEmail(email)}
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Getproject;
