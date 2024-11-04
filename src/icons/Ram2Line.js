import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRam2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 5a1 1 0 00-1 1v9a1 1 0 001 1v2a1 1 0 001 1h7.414l1-1h1.172l1 1H21a1 1 0 001-1v-2a1 1 0 001-1V6a1 1 0 00-1-1H2zm18 11v1h-5.586l-1-1H20zm-9.414 0l-1 1H4v-1h6.586zM3 14V7h18v7H3zm2-5h2v3H5V9zm6 0H9v3h2V9zm2 0h2v3h-2V9zm6 0h-2v3h2V9z" />
    </Svg>
  );
}

export default SvgRam2Line;
