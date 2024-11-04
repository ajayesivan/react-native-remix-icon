import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVipLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2.005 19h20v2h-20v-2zm9-11h2v8h-2V8zM7.97 8l-1.86 5.113L4.247 8H2.123l2.986 7.964h2L10.095 8H7.97zm9.035 6v2h-2V8h4a3 3 0 010 6h-2zm0-4v2h2a1 1 0 100-2h-2zm-15-7h20v2h-20V3z" />
    </Svg>
  );
}

export default SvgVipLine;
