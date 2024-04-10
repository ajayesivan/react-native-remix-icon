import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGolfBallLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 20a8 8 0 110-16 8 8 0 010 16zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm2-15a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 100-2 1 1 0 000 2zm4 1a1 1 0 11-2 0 1 1 0 012 0zm-1-2a1 1 0 100-2 1 1 0 000 2z" />
    </Svg>
  );
}

export default SvgGolfBallLine;
