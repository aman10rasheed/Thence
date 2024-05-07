import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import vector from "../assets/Vector.png";
import close from "../assets/close.png";

const Getproject = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Function to handle input changes
  const handleNameChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  // Function to validate email format
  const validateEmail = (email: string) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Function to handle form submission
  const handleSubmit = (event: { preventDefault: () => void }) => {
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
        <div className="flex flex-col mx-auto mt-[62px] gap-6">
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
            <p className="text-red-500">{emailError}</p>
          )}
          <button
            className={`w-[417px] h-[75px] py-6 mt-[40px] text-white text-lg rounded-full bg-gray-300 ${
              (!name.trim() || !validateEmail(email)) &&
              "opacity-50 cursor-not-allowed"
            }`}
            disabled={!name.trim() || !validateEmail(email)}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Getproject;
