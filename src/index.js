import React from "react";
import * as Icon from "./icons";
import { Text } from "react-native";
import camelCase from "camelcase";

// export function transformFilename(
//   filename
//   filenameCase
// ): string {
//   switch (filenameCase) {
//     case 'kebab':
//       return dashify(filename.replace(/_/g, '-'), { condense: true })
//     case 'camel':
//       return camelCase(filename)
//     case 'pascal':
//       return camelCase(filename, { pascalCase: true })
//     case 'snake':
//       return snakeCase(filename)
//     default:
//       throw new Error(`Unknown --filename-case ${filenameCase}`)
//   }
// }

// Function from svgr: https://github.com/gregberge/svgr/blob/main/packages/cli/src/util.ts#L65
const formatExportName = name => {
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

  const iconComponentName = formatExportName(name);
  const Component = Icon[iconComponentName];

  return Component ? (
    <Component {...props} fill={color || "black"} width={size} height={size} />
  ) : (
    <Text>Invalid Icon Name</Text>
  );
};

export default RemixIcon;
