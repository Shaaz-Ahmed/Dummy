// Offcanvas Component
import React from "react";
import PropTypes from "prop-types";
import { Drawer, IconButton, List, ListItem, ListItemText, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Custom styles for MDOffcanvas
import MDOffcanvasRoot from "components/MDOffcanvas/MDOffcanvasRoot";

const MDOffcanvas = ({ open, onClose, content, actions, position, ...rest }) => {
  const handleClose = () => {
    onClose(); // Close the offcanvas when the backdrop or close button is clicked
  };

  return (
    <MDOffcanvasRoot {...rest}>
      <Drawer
        anchor={position} // 'left', 'right', 'top', 'bottom'
        open={open}
        onClose={handleClose}
        variant="temporary"
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            padding: "20px",
            borderRadius: "8px",
          },
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>Offcanvas Title</h2>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>

        {/* Content inside the offcanvas */}
        <div>{content}</div>

        {/* Action buttons */}
        <div style={{ marginTop: "20px" }}>
          {actions.map((action, index) => (
            <Button key={index} onClick={action.onClick} color={action.color || "primary"} style={{ marginRight: "10px" }}>
              {action.label}
            </Button>
          ))}
        </div>
      </Drawer>
    </MDOffcanvasRoot>
  );
};

// Setting default values for the props of MDOffcanvas
MDOffcanvas.defaultProps = {
  open: false, // offcanvas is closed by default
  position: "left", // position of offcanvas: 'left', 'right', 'top', or 'bottom'
  content: "This is the content inside the offcanvas.", // default content
  actions: [], // no actions by default
};

// Typechecking props for MDOffcanvas
MDOffcanvas.propTypes = {
  open: PropTypes.bool.isRequired, // whether the offcanvas is open
  onClose: PropTypes.func.isRequired, // function to close the offcanvas
  content: PropTypes.node, // content inside the offcanvas
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      color: PropTypes.oneOf(["default", "inherit", "primary", "secondary"]),
    })
  ),
  position: PropTypes.oneOf(["left", "right", "top", "bottom"]), // offcanvas position
};

export default MDOffcanvas;
