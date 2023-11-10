import React from "react";
import Layout from "../Base/Layout";
import styles, { layout } from "../../style";
import Button from "../Base/Button";
import { card } from "../../assets";

const CardDeal = () => {
  return (
    <Layout>
      <div className={`${layout.sectionInfo} md:mb-0 mb-10`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className="sm:block hidden" />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button className="mt-10 rounded-lg max-w-[200px]">Get Started</Button>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="" className="w-[100%] h-[100%]" />
      </div>
    </Layout>
  );
};

export default CardDeal;
