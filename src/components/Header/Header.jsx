import css from "./Header.module.css";

const Header = () => {
  return (
    <header className="css.header">
      <div className="css.divHeader">
        <a className="css.icon" href="./">
          Gerícht
        </a>
        <nav className="css.nav">
          <a className="css.aNav" href="">
            Home
          </a>
          <a className="css.aNav" href="">
            Pages
          </a>
          <a className="css.aNav" href="">
            Contact Us
          </a>
          <a className="css.aNav" href="">
            Blog
          </a>
          <a className="css.aNav" href="">
            Landing
          </a>
        </nav>
        <div className="css.divLog">
          <a className="css.logReg" href="">
            Log in
          </a>
          <a className="css.logReg" href="">
            Registration
          </a>
        </div>
        <a className="css.bookTable" href="">
          Book Table
        </a>
      </div>
    </header>
  );
};
export default Header;
