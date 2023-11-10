import React from "react";
import Layout from "../Base/Layout";
import styles, { layout } from "../../style";
import Button from "../Base/Button";
import { features } from "../../constants";
import FeatureCard from "./FeatureCard";

const Business = () => {
  return (
    <Layout>
      <div className={`${layout.sectionInfo} md:mb-0 mb-10`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className="sm:block hidden" />
          we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button className="mt-10 rounded-lg max-w-[200px]">Get Started</Button>
      </div>

      <div className={`${layout.sectionInfo}`}>
        {features.map((feature, index: number) => (
          <FeatureCard feature={feature} index={index} />
        ))}
      </div>
    </Layout>
  );
};

export default Business;
