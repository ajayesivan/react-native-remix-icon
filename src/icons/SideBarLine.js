import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSideBarLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm5 2H4v14h4V5zm2 0v14h10V5H10z" />
    </Svg>
  );
}

export default SvgSideBarLine;
