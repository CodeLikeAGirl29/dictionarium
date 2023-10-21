import "./Definitions.css";
import PropTypes from 'prop-types';

const Definitions = ({ meanings, word, LightTheme }) => {
  return (
    <div className="meanings">
      {/* audio---------------------------- */}
      {meanings[0] && word && (
        <audio
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}
      {/* audio---------------------------- */}

      {word === "" ? (
        <span className="subTitle" key="fetching-results">
          fetching results...
        </span>
      ) : (
        meanings.map((mean, index) =>
          mean.meanings.map((item) =>
            item.definitions.map((def, index2) => (
              <div
                className="definitions"
                style={{
                  backgroundColor: LightTheme ? "#3b5360" : "ghostwhite",
                  color: LightTheme ? "ghostwhite" : "black",
                }}
                key={`${index}-${index2}`}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms :</b> {def.synonyms.map((s, index3) => (
                      <span key={`${index}-${index2}-${index3}`}>{`${s}, `}</span>
                    ))}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;

Definitions.propTypes = {
  meanings: PropTypes.array.isRequired,
  word: PropTypes.string.isRequired,
  LightTheme: PropTypes.bool.isRequired,
}
