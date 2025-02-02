import css from "./Hero.module.css";
import heroImg1x from "../../Images/Hero.jpg";
import heroImg2x from "../../Images/Hero@2x.jpg";

const Hero = () => {
  return (
    <section className={css.Hero}>
      <div className={css.divHero}>
        <div className={css.divLeft}>
          <h1 className={css.h1}>
            Chase the new Flavour
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="10"
              viewBox="0 0 40 10"
              fill="none"
            >
              <path
                d="M33.5014 9.5C37.0847 9.5 39.9998 7.48129 39.9998 4.99995C39.9998 2.51861 37.0847 0.5 33.5014 0.5C30.112 0.5 27.3219 2.30637 27.0298 4.6018H22.3527V3.6552L-0.000213623 3.6552V6.34446L22.3528 6.34446V5.39798H27.0299C27.3221 7.69352 30.112 9.5 33.5014 9.5ZM21.4896 5.54839L0.863079 5.54839V4.45161H21.4896V5.54839ZM27.866 4.99995C27.866 2.95778 30.3942 1.2964 33.5015 1.2964C36.6088 1.2964 39.137 2.95778 39.137 4.99995C39.137 7.04222 36.6088 8.7037 33.5015 8.7037C30.3942 8.7037 27.866 7.04222 27.866 4.99995Z"
                fill="#DCCA87"
              />
            </svg>
          </h1>
          <h2 className={css.h2}>The key to Fine dining</h2>
          <p className={css.p}>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus.
          </p>
          <button className={css.btn}>Explore Menu</button>
        </div>
        <div className={css.divRight}>
          <div className={css.rightTop}></div>
          <img
            className={css.img}
            srcSet={`${heroImg1x} 1x, ${heroImg2x} 2x`}
            src={heroImg1x}
            alt="egg"
            width="619"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
