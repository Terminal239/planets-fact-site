"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navigation = () => {
  const { width } = useWindowSize();
  const [showNavigation, setShowNavigation] = useState<boolean>(false);

  return (
    <>
      <nav className={`${width! < 650 ? "mobile-navigation" : ""} ${width! < 650 && showNavigation && "transform"}`}>
        <ul>
          <li className="mercury">
            <Link href={"/mercury"}>
              <span className="planet-color"></span>Mercury
            </Link>
          </li>
          <li className="venus">
            <Link href={"/venus"}>
              <span className="planet-color"></span>Venus
            </Link>
          </li>
          <li className="earth">
            <Link href={"/earth"}>
              <span className="planet-color"></span>Earth
            </Link>
          </li>
          <li className="mars">
            <Link href={"/mars"}>
              <span className="planet-color"></span>Mars
            </Link>
          </li>
          <li className="jupiter">
            <Link href={"/jupiter"}>
              <span className="planet-color"></span>Jupiter
            </Link>
          </li>
          <li className="saturn">
            <Link href={"/saturn"}>
              <span className="planet-color"></span>Saturn
            </Link>
          </li>
          <li className="uranus">
            <Link href={"/uranus"}>
              <span className="planet-color"></span>Uranus
            </Link>
          </li>
          <li className="neptune">
            <Link href={"/neptune"}>
              <span className="planet-color"></span>Neptune
            </Link>
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
