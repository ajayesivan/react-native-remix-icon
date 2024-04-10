import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayoutTop2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm-1 2H4v14h16V5zm-2 2v2H6V7h12z" />
    </Svg>
  );
}

export default SvgLayoutTop2Line;
