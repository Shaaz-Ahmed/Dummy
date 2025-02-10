// Close Button Component
import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Custom styles for MDCloseBtn
import MDCloseBtnRoot from "components/MDCloseBtn/MDCloseBtnRoot";

const MDCloseBtn = ({ onClose, color, size, ...rest }) => (
  <MDCloseBtnRoot {...rest}>
    <IconButton
      color={color}
      size={size}
      onClick={onClose}
      aria-label="close"
    >
      <CloseIcon />
    </IconButton>
  </MDCloseBtnRoot>
);

// Setting default values for the props of MDCloseBtn
MDCloseBtn.defaultProps = {
  color: "default", // default color for the icon button
  size: "small", // small size by default
  onClose: () => {}, // default empty function for onClose
};

// Typechecking props for MDCloseBtn
MDCloseBtn.propTypes = {
  onClose: PropTypes.func.isRequired, // function triggered when close is clicked
  color: PropTypes.oneOf(["default", "inherit", "primary", "secondary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default MDCloseBtn;

