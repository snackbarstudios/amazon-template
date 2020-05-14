/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const OutlineButton = ({ text, href, fullWidth }) => {
  return (
    <a
      sx={{
        border: "1px solid",
        display: "block",
        maxWidth: "170px",
        borderColor: ["primary", null, "highlight"],
        backgroundColor: ["highlight", null, "primary"],
        color: ["primary", null, "highlight"],
        fontWeight: "body",
        fontSize: 1,
        paddingX: 2,
        paddingY: 1,
        textAlign: "center",
        textTransform: "uppercase",
        textDecoration: "none",
        fontFamily: "heading",
        ":hover": {
          borderColor: ["primary", null, "primary"],
          backgroundColor: ["highlight", null, "highlight"],
          color: ["primary", null, "background"],
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
