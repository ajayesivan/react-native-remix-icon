import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgForbid2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm4.891-11.477l-8.368 8.368a6.036 6.036 0 01-1.414-1.414l8.368-8.368a6.041 6.041 0 011.414 1.414z" />
    </Svg>
  );
}

export default SvgForbid2Line;
