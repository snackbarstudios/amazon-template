/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";
import { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div
        sx={{
          position: "relative",
          minHeight: "100vh",
          main: {
            pb: ["550px", "330px"],
          },
          footer: {
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: ["550px", "330px"],
          },
        }}
      >
        <div>
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;