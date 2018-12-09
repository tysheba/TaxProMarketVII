import React from "react";
import "./ProList.css"

// RecipeList renders a bootstrap list item
export const ProList = props => (
  <ul className="list-group">{props.children}</ul>
);
