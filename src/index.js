import React from "react";
import * as Icon from "./icons";
import { Text } from "react-native";

// A combination of transformFilename & formatExportName functions from svgr: https://github.com/gregberge/svgr/blob/main/packages/cli/src/util.ts
const getIconName = name => {
  let result = name
    .split("-")
    .map(word => {
      if (/^\d/.test(word)) {
        return word
          .split("")
          .map((char, charIndex) =>
            /^\d$/.test(char)
              ? char
              : charIndex === 0
              ? char
              : char.toUpperCase()
          )
          .join("");
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");

  if (/^\d/.test(name)) {
    result = `Svg${result}`;
  }

  return result;
};

const RemixIcon = ({
  name = "remixicon-fill",
  color = "black",
  size = 24,
  fallback = <Text>Invalid Icon Name</Text>,
  ...props
}) => {
  if (!name) {
    return fallback;
  }
  // The icon name from remixicon.com UI starts with "ri-", so we need to remove this prefix if present.
  name = name.startsWith("ri-") ? name.substring(3) : name;

  const iconComponentName = getIconName(name);
  const Component = Icon[iconComponentName];

  return Component ? (
    <Component {...props} fill={color || "black"} width={size} height={size} />
  ) : (
    fallback
  );
};

export default RemixIcon;
