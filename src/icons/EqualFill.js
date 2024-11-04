import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEqualFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19 8H5v2h14V8zm0 6H5v2h14v-2z" />
    </Svg>
  );
}

export default SvgEqualFill;
