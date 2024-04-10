import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNpmjsLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.001 3a1 1 0 011 1v16a1 1 0 01-1 1h-16a1 1 0 01-1-1V4a1 1 0 011-1h16zm-1 2h-14v14h14V5zm-2 2v10h-2.5V9.5h-2.5V17h-5V7h10z" />
    </Svg>
  );
}

export default SvgNpmjsLine;
