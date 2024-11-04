import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTempColdFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 10.255V5a4 4 0 118 0v5.255a7 7 0 11-8 0zM8 16a4 4 0 008 0H8z" />
    </Svg>
  );
}

export default SvgTempColdFill;
