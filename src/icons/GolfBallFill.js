import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGolfBallFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-8-5a1 1 0 10-2 0 1 1 0 002 0zm-1 4a1 1 0 100-2 1 1 0 000 2zm4 1a1 1 0 10-2 0 1 1 0 002 0zm-1-2a1 1 0 100-2 1 1 0 000 2z" />
    </Svg>
  );
}

export default SvgGolfBallFill;
