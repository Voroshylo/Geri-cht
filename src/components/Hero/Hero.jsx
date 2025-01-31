import css from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={css.Hero}>
      <div className={css.divHero}>
        <div className={css.divLeft}>
          <h1 className={css.h1}></h1>
          <h2 className={css.h2}></h2>
          <p className={css.p}></p>
          <button className={css.btn}></button>
        </div>
        <div className={css.divRight}>
          <img
            className={css.img}
            srcSet="
        ../../Images/Hero.jpg 1x,
        ../../Images/Hero@2x.jpg 2x,
        "
            src="../../Images/Hero.jpg"
            alt="egg"
            width="366"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
