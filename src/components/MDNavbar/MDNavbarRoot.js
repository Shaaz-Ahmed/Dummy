// Custom Navbar Styles
// @mui material components
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

export default styled(AppBar)(({ theme, ownerState }) => {
  const { palette, functions } = theme;
  const { color, position } = ownerState;

  const { primary, secondary, grey } = palette;

  // Styles based on color prop
  const getColorStyles = () => {
    switch (color) {
      case "primary":
        return {
          backgroundColor: primary.main,
        };
      case "secondary":
        return {
          backgroundColor: secondary.main,
        };
      case "default":
        return {
          backgroundColor: grey[800],
        };
      default:
        return {};
    }
  };

  return {
    ...getColorStyles(),
    position: position,
    padding: "10px 20px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };
});
