/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { lighten } from "@theme-ui/color";

const OutlineButton = ({ text, href, fullWidth }) => {
  return (
    <a
      // sx={{
      //   border: "1px solid",
      //   display: "block",
      //   maxWidth: "170px",
      //   borderColor: "highlight",
      //   backgroundColor: "highlight",
      //   color: "background",
      //   fontWeight: "body",
      //   fontSize: 1,
      //   paddingX: 2,
      //   paddingY: 1,
      //   textAlign: "center",
      //   textTransform: "uppercase",
      //   textDecoration: "none",
      //   fontFamily: "heading",
      //   ":hover": {
      //     backgroundColor: lighten("highlight", 0.1),
      //   },
      // }}
      sx={{
        display: "inline-block",
        maxWidth: "170px",
        position: "relative",
        textDecoration: "none",
        fontFamily: "body",
        fontWeight: "body",
        fontSize: [4, 1],
        color: "text",
        zIndex: 2,
        "::after": {
          content: '" "',
          position: "absolute",
          zIndex: -1,
          display: "block",
          width: "100%",
          height: "2px",
          backgroundColor: "highlight",
          opacity: 1,
          transition: "0.5s",
        },
        ":hover": {
          "::after": {
            height: "30px",
            mt: "-30px",
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
