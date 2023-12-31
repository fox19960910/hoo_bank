import styles from "../../style";
import Button from "../Base/Button";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col box-shadow bg-black-gradient-2 rounded-[20px]`}
    >
      <div className="flex flex-1 flex-col">
        <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className={`${styles.flexCenter} md:ml-10 ml-0  md:mt-0 mt-10`}>
        <Button className="mt-10 rounded-lg max-w-[200px]">Get Started</Button>
      </div>
    </section>
  );
};

export default CTA;
