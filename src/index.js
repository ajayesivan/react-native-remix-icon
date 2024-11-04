import React from "react";
import * as Icon from "./icons";
import { Text } from "react-native";

const RemixIcon = ({
  name = "remixicon-fill",
  color = "black",
  size = 24,
  ...props
}) => {
  // In remicicon.com UI the icon name starts with ri- thats why we have this check here.
  name = name.startsWith("ri-") ? name.substring(3) : name;

  const iconComponentName = name
    .split("-")
    .map(s => s[0].toUpperCase() + s.substr(1))
    .join("");
  const Component = Icon[iconComponentName];

  return Component ? (
    <Component {...props} fill={color || "black"} width={size} height={size} />
  ) : (
    <Text>Invalid Icon Name</Text>
  );
};

export default RemixIcon;
