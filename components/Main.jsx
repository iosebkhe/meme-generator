import classes from "./main.module.css";
// import memesData from "../memesData";
import { useState, useEffect } from "react";

function Main() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(
    function () {
      fetch("https://api.imgflip.com/get_memes")
        .then((response) => response.json())
        .then((data) => setAllMemes(data.data.memes));
    },
    [meme.randomImage]
  );

  console.log(allMemes);

  const getImg = function (e) {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  };

  const handleChange = function (e) {
    const { value, name } = e.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  return (
    <main className={classes.main}>
      <form className={classes.form}>
        <div className={classes.inputBox}>
          <input
            className={classes.form__input}
            type="text"
            placeholder="Top Text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            className={classes.form__input}
            type="text"
            placeholder="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button onClick={getImg} className={classes.btn}>
          Get a new meme image 🛀
        </button>
      </form>

      <div className={classes.img__box}>
        <img src={meme.randomImage} className={classes.img__meme} />
        <h2 className={`${classes.memeText} ${classes.top}`}>{meme.topText}</h2>
        <h2 className={`${classes.memeText} ${classes.bottom}`}>
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
}

export default Main;
