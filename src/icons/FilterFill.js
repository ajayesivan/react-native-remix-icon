import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFilterFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 4v2h-1l-6 9v7h-4v-7L4 6H3V4h18z" />
    </Svg>
  );
}

export default SvgFilterFill;
