import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDrizzleFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 18v3H9v-3a8 8 0 117.458-10.901A5.5 5.5 0 1117.5 18H11zm2 2h2v3h-2v-3z" />
    </Svg>
  );
}

export default SvgDrizzleFill;
