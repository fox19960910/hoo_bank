import React from "react";
import styles from "../../style";
import { arrowUp } from "../../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`w-[100%] h-[100%] rounded-full bg-primary ${styles.flexCenter}`}
      >
        <div className={`${styles.flexCenter} flex-col`}>
          <div className={` flex-row ${styles.flexCenter}`}>
            <p className="font-poppins font-medium text-[18px] leading-[23px]">
              <span className="text-gradient">Get</span>
            </p>
            <img src={arrowUp} alt="arrow" />
          </div>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Started</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
