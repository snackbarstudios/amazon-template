/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const ImageSliderContainer = ({ children }) => (
  <div
    sx={{
      width: "100%",
      height: "100%",
    }}
  >
    {children}
  </div>
);

export default ImageSliderContainer;

ImageSliderContainer.propTypes = {
  children: PropTypes.node.isRequired,
};