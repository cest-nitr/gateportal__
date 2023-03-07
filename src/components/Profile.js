import React from "react";
import Button from "./shared/Button";
import { GoLocation } from "react-icons/go";
import { FaUserGraduate } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";

function Profile() {
  return (
    <div className="relative flex flex-col mt-[70px] mx-2 pt-4 z-[-100]">
      <div>
        <Button linkto={"/"} targetPage={"Home"} />
        <div className="py-2 flex flex-col sm:flex-row">
          <div
            class="relative w-auto sm:w-64 rounded-md drop-shadow-[0_0px_6px_rgba(0,0,0,0.25)] bg-bg-color"
            aria-label="Sidebar"
          >
            <div className="flex flex-col items-center my-5 mx-1">
              <img
                class="p-1 w-32 h-32 rounded-full ring-2 ring-primary-color"
                src="https://picsum.photos/200"
                alt="Bordered avatar"
              />
              <p className="font-poppins text-2xl text-primary-color text-center pt-2">
                Anmol Pattnayak
              </p>
              <div className="flex flex-col items-center my-2 mx-1">
                <p className="font-poppins text-xl text-tertiary-color text-center pt-2">
                  Personal Details:
                </p>
                <p className="text-secondary-color font-poppins text-sm flex items-center mt-1">
                  <FaSchool className="mr-1" />
                  NIT ROURKELA
                </p>
                <p className="text-tertiary-color font-poppins text-sm flex items-center text-center">
                  <FaUserGraduate className="mr-1" />
                  2021-2025
                </p>
                <p className="text-tertiary-color font-poppins text-sm flex items-center">
                  <GoLocation className="mr-1" /> Bhubaneswar
                </p>
              </div>
              <div className="flex flex-col items-center my-2 bg-primary-color rounded-xl p-3 drop-shadow-[0_0px_6px_rgba(0,0,0,0.25)]">
                <p className="font-poppins text-xl text-bg-color text-center">
                  Profile Highlights
                </p>
                <p className="text-bg-color font-poppins text-sm flex items-center mt-1">
                  Tests attempted: 12
                </p>
                <p className="text-bg-color font-poppins text-sm flex items-center">
                  Questions solved: 61
                </p>
                <p className="text-bg-color font-poppins text-sm flex items-center">
                  Average Score: 66
                </p>
              </div>
            </div>
          </div>

          <div className="h-auto relative mx-0 sm:mx-5 my-5 sm:my-0 rounded-lg drop-shadow-[0_0px_7px_rgba(0,0,0,0.25)] bg-bg-color w-full">
            <div className="m-4">
              <h1 className="text-5xl font-poppins text-primary-color">
                Hii Anmol!
              </h1>
              <p className="text-md font-poppins text-tertiary-color">
                Welcome to your profile
              </p>
              <div className="flex flex-col">
                <div className="flex flex-col lg:flex-row">
                  <div className="bg-primary-color drop-shadow-[0_0px_6px_rgba(0,0,0,0.3)] rounded-lg p-3 my-3 w-full mr-0 sm:mr-3">
                    <p className="font-poppins text-bg-color">
                      Highest Score: 67
                    </p>
                  </div>
                  <div className="bg-primary-color drop-shadow-[0_0px_6px_rgba(0,0,0,0.25)] rounded-lg p-3 my-3 w-full mr-2">
                    <p className="font-poppins text-bg-color">Rank: 1070</p>
                  </div>
                  <div className="flex items-center drop-shadow-[0_0px_6px_rgba(0,0,0,0.25)] m-0 p-0">
                    <Button
                      linkto={"/leaderboard"}
                      targetPage={"Leaderboard"}
                    />
                  </div>
                </div>
                <div>
                  <p className="font-poppins text-secondary-color text-xl">
                    Recent Tests:
                  </p>
                  <div className="flex flex-col h-80 overflow-scroll w-full bg-white p-2 shadow-[inset_3px_3px_8px_rgba(0,0,0,0.2)] rounded-lg">
                  <div className='w-auto font-poppins text-xl bg-primary-color text-bg-color m-1 drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] rounded-lg p-2'>Test-1 | Score: 72</div>
                  <div className='w-auto font-poppins text-xl bg-primary-color text-bg-color m-1 drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] rounded-lg p-2'>Test-1 | Score: 72</div>
                  <div className='w-auto font-poppins text-xl bg-primary-color text-bg-color m-1 drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] rounded-lg p-2'>Test-1 | Score: 72</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
