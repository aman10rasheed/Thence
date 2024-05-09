import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import vector from "../assets/Vector.png";
import close from "../assets/close.png";
import frame from "../assets/Frame.png";

const Congratulation: React.FC = () => {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Replace "/" with the desired route path for the homepage
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000); // Decrement seconds every 1000 milliseconds (1 second)

    // Clear the interval when the component unmounts or seconds reach 0
    return () => clearInterval(countdownTimer);
  }, []);

  return (
    <div className="flex-col flex gap-32 font-custom">
      <div className="flex px-[52px] py-[32px] justify-between items-center">
        <img src={vector} alt="vector logo" />
        <Link to="/">
          <img src={close} alt="close logo" />
        </Link>
      </div>
      <div className="flex items-center flex-col mx-auto w-[588px]">
        <div>
          <img src={frame} alt="" className="mx-auto" />
          <p className="font-grace mt-[41px] text-[36px] pb-4 text-center text-custom animate-fadeIn">
            Success Submitted
          </p>
          <p
            className="text-[56px] w-[588px] pb-[20px] font-semibold text-center animate-pulse"
            style={{ lineHeight: "67.2px" }}
          >
            Congratulations
          </p>
          <p className="text-[27px] font-medium text-center">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </p>
        </div>
      </div>
      <div>
        <p className="text-[20px] text-center">
          Redirecting you to Homepage in{" "}
          <span className="text-[20px] text-center font-semibold">
            {seconds} Seconds
          </span>
        </p>
      </div>
    </div>
  );
};

export default Congratulation;
