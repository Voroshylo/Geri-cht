import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.divHeader}>
        <a className={css.logo} href="./">
          Gerícht
        </a>
        <nav className={css.nav}>
          <a className={css.aNav} href="">
            Home
          </a>
          <a className={css.aNav} href="">
            Pages
          </a>
          <a className={css.aNav} href="">
            Contact Us
          </a>
          <a className={css.aNav} href="">
            Blog
          </a>
          <a className={css.aNav} href="">
            Landing
          </a>
        </nav>
        <div className={css.divLog}>
          <a className={css.logReg} href="">
            Log in /
          </a>
          <a className={css.logReg} href="">
            Registration
          </a>
        </div>
        <svg
          className={css.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="57"
          viewBox="0 0 2 57"
          fill="none"
        >
          <path
            d="M1 0C1 22.2599 1 34.7401 1 57"
            stroke="url(#paint0_radial_572_127)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_572_127"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1.5 28.5) rotate(90) scale(28.5 0.5)"
            >
              <stop offset="0.588542" stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <a className={css.bookTable} href="">
          Book Table
        </a>
      </div>
    </header>
  );
};

export default Header;
