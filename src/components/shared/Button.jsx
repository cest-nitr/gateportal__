import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function Button({linkto, targetPage}) {
  return (
    <>
      <button className="text-white bg-primary-color hover:bg-secondary-color rounded-lg text-sm px-5 py-2.5">
        <Link to={linkto} className="flex items-center">
          <IoIosArrowBack />
          <p className="text-lg ml-1 py-0 font-poppins">{targetPage}</p>
        </Link>
      </button>
    </>
  );
}

export default Button;
