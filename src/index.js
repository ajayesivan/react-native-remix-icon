import React from "react";
import * as Icon from "./icons";
import { Text } from "react-native";
import camelCase from "camelcase";

// A combination of transformFilename & formatExportName functions from svgr: https://github.com/gregberge/svgr/blob/main/packages/cli/src/util.ts
const getIconName = name => {
  name = camelCase(name, { pascalCase: true });
  if (/[-]/g.test(name) && /^\d/.test(name)) {
    return `Svg${camelCase(name, { pascalCase: true })}`;
  }

  if (/^\d/.test(name)) {
    return `Svg${name}`;
  }

  return camelCase(name, { pascalCase: true });
};

const RemixIcon = ({
  name = "remixicon-fill",
  color = "black",
  size = 24,
  ...props
}) => {
  // The icon name from remixicon.com UI starts with "ri-", so we need to remove this prefix if present.
  name = name.startsWith("ri-") ? name.substring(3) : name;

  const iconComponentName = getIconName(name);
  const Component = Icon[iconComponentName];

  return Component ? (
    <Component {...props} fill={color || "black"} width={size} height={size} />
  ) : (
    <Text>Invalid Icon Name</Text>
  );
};

export default RemixIcon;
