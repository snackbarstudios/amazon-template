/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const OutlineButton = ({ text, href, fullWidth }) => {
  return (
    <a
      sx={{
        display: ["block", null, "inline-block"],
        maxWidth: ["100%", "170px", null],
        position: "relative",
        textDecoration: "none",
        fontFamily: "body",
        fontWeight: "body",
        fontSize: 1,
        color: ["background", null, "text"],
        paddingX: "10px",
        textAlign: "center",
        zIndex: 2,
        "::after": {
          content: '" "',
          position: "absolute",
          zIndex: -1,
          display: "block",
          width: "100%",
          height: ["40px", null, "2px"],
          backgroundColor: "highlight",
          transition: "0.2s",
          ml: "-10px",
          marginTop: ["-33px", null, "5px"],
        },
        ":hover": {
          color: "background",
          "::after": {
            height: [0, null, "40px"],
            mt: [0, null, "-33px"],
          },
        },
      }}
      href={href}
    >
      {text}
    </a>
  );
};

OutlineButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default OutlineButton;
