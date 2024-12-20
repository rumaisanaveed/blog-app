import React from "react";
import classes from "../home-page/hero.module.css";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/rumaisa.jpg"
          width={300}
          height={300}
          alt="An image showing rumaisa"
        />
      </div>
      <h1>Hi, I'm Rumaisa</h1>
      <p>
        I blog about web development - especially frontend frameworks like Next
        or React
      </p>
    </section>
  );
};
