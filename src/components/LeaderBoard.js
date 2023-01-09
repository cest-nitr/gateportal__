import React from "react";
import Button from "./shared/Button";

const LeaderBoard = () => {
  return (
    <div className="flex flex-col m-2">
      <div>
        <Button linkto={"/"} targetPage={"Home"} />
        <div className="py-2 flex flex-col">
          <div className="self-center">
            <div className="flex flex-col md:flex-row">
              <div className="w-[250px] border-t-8 border-primary-color rounded-t-lg bg-bg-color pb-3 m-5 flex flex-col items-center drop-shadow-[0_0px_6px_rgba(0,0,0,0.25)]">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="w-full"
                />
                <h2 className="text-secondary-color pt-1">Anmol Pattnayak</h2>
                <p className="text-secondary-color">NIT Rourkela</p>
              </div>
              <div className="w-[250px] border-t-8 border-primary-color rounded-t-lg bg-bg-color pb-3 m-5 flex flex-col items-center drop-shadow-[0_0px_6px_rgba(0,0,0,0.25)]">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="w-full"
                />
                <h2 className="text-secondary-color pt-1">Anmol Pattnayak</h2>
                <p className="text-secondary-color">NIT Rourkela</p>
              </div>
              <div className="w-[250px] border-t-8 border-primary-color rounded-t-lg bg-bg-color pb-3 m-5 flex flex-col items-center drop-shadow-[0_0px_6px_rgba(0,0,0,0.25)]">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="w-full"
                />
                <h2 className="text-secondary-color pt-1">Anmol Pattnayak</h2>
                <p className="text-secondary-color">NIT Rourkela</p>
              </div>
            </div>
          </div>
          <div className="p-2">
            <p className="text-2xl text-primary-color font-bold">Top Performers</p>
          </div>
          <div>
            <div className="flex flex-col h-60 w-full overflow-scroll bg-white p-2 shadow-[inset_3px_3px_8px_rgba(0,0,0,0.2)] rounded-lg">
              <div className="flex items-center w-auto font-poppins text-xl bg-primary-color text-bg-color m-1 drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] rounded-lg p-2">
                  <img src="https://picsum.photos/200" className="w-10 mr-2 rounded-md" alt="top-user"/>
                  <p>Anmol Pattnayak</p>
              </div>
              <div className="flex items-center w-auto font-poppins text-xl bg-primary-color text-bg-color m-1 drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] rounded-lg p-2">
                  <img src="https://picsum.photos/200" className="w-10 mr-2 rounded-md" alt="top-user"/>
                  <p>Anmol Pattnayak</p>
              </div>
              <div className="flex items-center w-auto font-poppins text-xl bg-primary-color text-bg-color m-1 drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] rounded-lg p-2">
                  <img src="https://picsum.photos/200" className="w-10 mr-2 rounded-md" alt="top-user"/>
                  <p>Anmol Pattnayak</p>
              </div>
              <div className="flex items-center w-auto font-poppins text-xl bg-primary-color text-bg-color m-1 drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] rounded-lg p-2">
                  <img src="https://picsum.photos/200" className="w-10 mr-2 rounded-md" alt="top-user"/>
                  <p>Anmol Pattnayak</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
