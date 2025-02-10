// Pagination Component
import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "@mui/material";

// Custom styles for MDPagination
import MDPaginationRoot from "components/MDPagination/MDPaginationRoot";

const MDPagination = ({ count, page, onPageChange, color, size, ...rest }) => {
  return (
    <MDPaginationRoot {...rest}>
      <Pagination
        count={count} // total number of pages
        page={page} // current page
        onChange={onPageChange} // callback when page changes
        color={color} // color of the pagination
        size={size} // size of the pagination buttons ('small', 'medium', 'large')
        shape="rounded" // rounded corners for pagination buttons
        siblingCount={1} // controls how many pages on either side of the current page are displayed
      />
    </MDPaginationRoot>
  );
};

// Setting default values for the props of MDPagination
MDPagination.defaultProps = {
  count: 10, // default number of pages
  page: 1, // default current page
  color: "primary", // default color
  size: "medium", // default size
};

// Typechecking props for MDPagination
MDPagination.propTypes = {
  count: PropTypes.number.isRequired, // total number of pages
  page: PropTypes.number.isRequired, // current page
  onPageChange: PropTypes.func.isRequired, // callback when page changes
  color: PropTypes.oneOf(["primary", "secondary", "standard"]), // color of the pagination
  size: PropTypes.oneOf(["small", "medium", "large"]), // size of the pagination
};

export default MDPagination;
