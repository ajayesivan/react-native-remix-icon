import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgOrderPlayLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 4V2.067a.5.5 0 01.82-.384l4.12 3.433a.5.5 0 01-.321.884H2V4h15zM2 18h20v2H2v-2zm0-7h20v2H2v-2z" />
    </Svg>
  );
}

export default SvgOrderPlayLine;
