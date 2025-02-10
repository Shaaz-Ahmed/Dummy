//  The Card Component
import React from "react";
import PropTypes from "prop-types";
import MDCardRoot from "components/MDCard/MDCardRoot";
import { CardContent, Typography, CardActions, Button } from "@mui/material";

const MDCard = ({ title, content, image, actions, ...rest }) => (
  <MDCardRoot {...rest}>
    {image && <img src={image} alt="Card image" style={{ width: "100%" }} />}
    <CardContent>
      <Typography variant="h6" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {content}
      </Typography>
    </CardContent>
    {actions && (
      <CardActions>
        {actions.map((action, index) => (
          <Button key={index} size="small" color="primary" onClick={action.onClick}>
            {action.label}
          </Button>
        ))}
      </CardActions>
    )}
  </MDCardRoot>
);

// Setting default values for the props of MDCard
MDCard.defaultProps = {
  title: "Card Title",
  content: "Card content goes here.",
  image: null,
  actions: [],
};

// Typechecking props for MDCard
MDCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ),
};

export default MDCard;
