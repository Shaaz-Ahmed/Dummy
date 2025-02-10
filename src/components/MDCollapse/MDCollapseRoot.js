//  Custom Collapse Styles
// @mui material components
import { styled } from "@mui/material/styles";

export default styled("div")(() => ({
  margin: "10px 0",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "10px",
  backgroundColor: "#f9f9f9",

  "& .MuiIconButton-root": {
    padding: "8px",
  },

  "& .MuiTypography-root": {
    fontWeight: 600,
  },
}));
