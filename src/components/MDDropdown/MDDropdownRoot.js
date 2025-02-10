// Custom Dropdown Styles
// @mui material components
import { styled } from "@mui/material/styles";

export default styled("div")(({ theme, ownerState }) => {
  const { palette } = theme;
  const { primary, secondary, grey } = palette;
  const { color } = ownerState;

  // Styles for the dropdown based on color
  const getColorStyles = () => {
    switch (color) {
      case "primary":
        return {
          backgroundColor: primary.main,
          color: "#fff",
        };
      case "secondary":
        return {
          backgroundColor: secondary.main,
          color: "#fff",
        };
      case "default":
        return {
          backgroundColor: grey[800],
          color: "#fff",
        };
      default:
        return {};
    }
  };

  return {
    ...getColorStyles(),
    borderRadius: "4px",
    display: "inline-block",
    padding: "8px 16px",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };
});
