"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import React, { useState } from "react";

const Navigation = () => {
  const { width } = useWindowSize();
  const [showNavigation, setShowNavigation] = useState<boolean>(false);

  return (
    <>
      <nav className={`${width! < 650 ? "mobile-navigation" : ""} ${width! < 650 && showNavigation && "transform"}`}>
        <ul>
          <li className="mercury">
            <span className="planet-color"></span>Mercury
          </li>
          <li className="venus">
            <span className="planet-color"></span>Venus
          </li>
          <li className="earth">
            <span className="planet-color"></span>Earth
          </li>
          <li className="mars">
            <span className="planet-color"></span>Mars
          </li>
          <li className="jupiter">
            <span className="planet-color"></span>Jupiter
          </li>
          <li className="saturn">
            <span className="planet-color"></span>Saturn
          </li>
          <li className="uranus">
            <span className="planet-color"></span>Uranus
          </li>
          <li className="neptune">
            <span className="planet-color"></span>Neptune
          </li>
        </ul>
      </nav>
      {width! < 650 && (
        <button onClick={() => setShowNavigation((prev) => !prev)} className={`toggle-nav ${showNavigation ? "sticky" : ""}`}>
          <Image src={showNavigation ? "/icon-chevron.svg" : "/icon-hamburger.svg"} alt="menu icon" height={24} width={24} />
        </button>
      )}
    </>
  );
};

export default Navigation;
