import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHammerLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 2a1 1 0 011 1v5a1 1 0 01-1 1h-5v13a1 1 0 01-1 1h-4a1 1 0 01-1-1V9H3.5a1 1 0 01-1-1V5.618a1 1 0 01.553-.894L8.5 2H20zm-5 2H8.972L4.5 6.236V7H11v14h2V7h2V4zm4 0h-2v3h2V4z" />
    </Svg>
  );
}

export default SvgHammerLine;
