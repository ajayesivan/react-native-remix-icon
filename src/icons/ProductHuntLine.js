import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgProductHuntLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm1.334-8a1.5 1.5 0 000-3H10.5v3h2.834zm0-5a3.5 3.5 0 110 7H10.5v3h-2V7h4.834z" />
    </Svg>
  );
}

export default SvgProductHuntLine;
