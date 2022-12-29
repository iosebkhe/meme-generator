import classes from "./header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.header__logoBox}>
        <img
          className={classes.header__logo}
          src="../images/troll-face.png"
          alt="Troll face"
        />
        <h1 className={classes.heading}>Meme Generator</h1>
      </div>
      <p className={classes.header__text}>React Course - Project 3</p>
    </header>
  );
}

export default Header;
