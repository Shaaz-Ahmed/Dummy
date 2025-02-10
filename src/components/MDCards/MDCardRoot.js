// Custom Card Styles
// @mui material components
import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

export default styled(Card)(({ theme, ownerState }) => {
  const { palette, shadows } = theme;

  return {
    backgroundColor: palette.background.paper,
    boxShadow: shadows[3],
    borderRadius: "8px",
    maxWidth: "345px",
    margin: "15px",
    overflow: "hidden",

    "& img": {
      objectFit: "cover",
      height: "200px",
    },
  };
});
