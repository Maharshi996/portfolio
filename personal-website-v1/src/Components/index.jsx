import React from "react";
import { componentMap } from "../manifest";

export function renderComponent({ type, key, ...props }) {
  const Component = componentMap[type];
  if (!Component) return null;
  return <Component key={key} {...props} />;
}
