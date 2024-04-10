import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSubtractFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19 11H5v2h14v-2z" />
    </Svg>
  );
}

export default SvgSubtractFill;
