import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArmchairLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 3a4 4 0 00-4 4v2.126a4.002 4.002 0 00-1 7.339V21h2v-1h14v1h2v-4.535a4.002 4.002 0 00-1-7.339V7a4 4 0 00-4-4H8zm10 6.126c-1.725.444-3 2.01-3 3.874H9a4.002 4.002 0 00-3-3.874V7a2 2 0 012-2h8a2 2 0 012 2v2.126zM9 15h6v1h2v-3a2 2 0 112.667 1.886 1 1 0 00-.667.943V18H5v-2.17a1 1 0 00-.667-.944A2.001 2.001 0 015 11a2 2 0 012 2v3h2v-1z" />
    </Svg>
  );
}

export default SvgArmchairLine;
