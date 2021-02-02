import React from "react";
import * as Icon from "./icons";

const RemixIcon = ({
  name = "remixicon-fill",
  color = "black",
  size = 24,
  ...props
}) => {
  const iconComponentName = name
    .split("-")
    .map(s => s[0].toUpperCase() + s.substr(1))
    .join("");
  const Component = Icon[iconComponentName];

  return (
    <Component {...props} fill={color || "black"} width={size} height={size} />
  );
};

export default RemixIcon;
