import { createTheme, TextField, ThemeProvider } from "@material-ui/core";
import "./Header.css";
import { debounce } from "lodash";

import PropTypes from 'prop-types';

const Header = ({
  setWord,
  word,
  setMeanings,
  LightTheme,
}) => {


  const darkTheme = createTheme({
    palette: {
      primary: {
        main: LightTheme ? "#000" : "#fff",
      },
      type: LightTheme ? "light" : "dark",
    },
  });

  const handleChange = (e) => {
    setWord("");
    setMeanings([]);
    e.preventDefault();
  };

  const handleText = debounce((text) => {
    setWord(text);
  }, 500);

  return (
    <div className="header">
      <span className="title">{word ? word : "Dictionarium"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="filled-basic"
            // value={word}
            label="Search..."
            onChange={(e) => handleText(e.target.value)}
          />
          <div className="underline"></div>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  setWord: PropTypes.func.isRequired,
  word: PropTypes.string.isRequired,
  setMeanings: PropTypes.func.isRequired,
  LightTheme: PropTypes.bool.isRequired,
};
