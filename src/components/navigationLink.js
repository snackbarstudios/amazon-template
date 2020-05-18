/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const NavigationLink = ({ children, href, open }) => {
  return (
    <li
      sx={{
        listStyle: "none",
        position: "relative",
        height: ["auto", "25px"],
        ml: [0, 4, null],
        mt: [4, "0px"],
        pl: 1,
      }}
    >
      <Link
        to={href}
        aria-label={`Link to ${href}`}
        activeClassName="active"
        sx={{
          display: "inline-block",
          position: "relative",
          textDecoration: "none",
          fontFamily: "body",
          fontWeight: "body",
          fontSize: [3, 1],
          color: "text",
          zIndex: 2,
          "::after": {
            content: '" "',
            position: "absolute",
            zIndex: -1,
            display: "block",
            width: 0,
            height: ["15px", "8px", null],
            ml: ["-5%", "-10%", null],
            mt: ["-22px", "-10px", null],
            backgroundColor: "primary",
            opacity: 0,
            transition: "0.5s",
          },
          ":hover": {
            "::after": {
              opacity: 1,
              width: ["105%", "110%", null],
            },
          },
          ":active": {
            "::after": {
              opacity: 1,
              width: ["105%", "110%", null],
            },
          },
          "&.active": {
            "::after": {
              opacity: 1,
              width: ["105%", "110%", null],
            },
          },
        }}
      >
        {children}
      </Link>
    </li>
  );
};

NavigationLink.defaultProps = {
  open: false,
};

NavigationLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

export default NavigationLink;
