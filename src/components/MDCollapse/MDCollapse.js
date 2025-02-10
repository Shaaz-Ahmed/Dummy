// Collapse Component
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Collapse, IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Custom styles for MDCollapse
import MDCollapseRoot from "components/MDCollapse/MDCollapseRoot";

const MDCollapse = ({ label, content, expandedInitially, ...rest }) => {
  const [expanded, setExpanded] = useState(expandedInitially);

  const handleToggleCollapse = () => {
    setExpanded(!expanded);
  };

  return (
    <MDCollapseRoot {...rest}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {label}
        </Typography>
        <IconButton onClick={handleToggleCollapse}>
          <ExpandMoreIcon />
        </IconButton>
      </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div>{content}</div>
      </Collapse>
    </MDCollapseRoot>
  );
};

// Setting default values for the props of MDCollapse
MDCollapse.defaultProps = {
  label: "Click to expand",
  content: "This is the collapsible content.",
  expandedInitially: false, // The section starts as collapsed by default
};

// Typechecking props for MDCollapse
MDCollapse.propTypes = {
  label: PropTypes.string,
  content: PropTypes.string,
  expandedInitially: PropTypes.bool,
};

export default MDCollapse;
