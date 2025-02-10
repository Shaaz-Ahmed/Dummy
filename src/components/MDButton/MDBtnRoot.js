// Custom Button Styles
// @mui material components
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export default styled(Button)(({ theme, ownerState }) => {
  const { palette, functions } = theme;
  const { color, size, disabled } = ownerState;

  const { grey, transparent, primary, secondary, error, success } = palette;
  const { pxToRem } = functions;

  // Styles for the button
  const getButtonStyles = () => {
    switch (color) {
      case "primary":
        return {
          backgroundColor: primary.main,
          color: "#fff",
          "&:hover": {
            backgroundColor: primary.dark,
          },
        };
      case "secondary":
        return {
          backgroundColor: secondary.main,
          color: "#fff",
          "&:hover": {
            backgroundColor: secondary.dark,
          },
        };
      case "error":
        return {
          backgroundColor: error.main,
          color: "#fff",
          "&:hover": {
            backgroundColor: error.dark,
          },
        };
      case "success":
        return {
          backgroundColor: success.main,
          color: "#fff",
          "&:hover": {
            backgroundColor: success.dark,
          },
        };
      default:
        return {};
    }
  };

  // Styles for different button sizes
  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return {
          padding: `${pxToRem(6)} ${pxToRem(16)}`,
          fontSize: pxToRem(12),
        };
      case "medium":
        return {
          padding: `${pxToRem(8)} ${pxToRem(20)}`,
          fontSize: pxToRem(14),
        };
      case "large":
        return {
          padding: `${pxToRem(10)} ${pxToRem(24)}`,
          fontSize: pxToRem(16),
        };
      default:
        return {};
    }
  };

  return {
    backgroundColor: disabled ? grey[200] : transparent.main,
    pointerEvents: disabled ? "none" : "auto",
    ...getButtonStyles(),
    ...getSizeStyles(),
    borderRadius: pxToRem(8),
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  };
});
