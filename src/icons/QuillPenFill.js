import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgQuillPenFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 1.997c-15 0-17 14-18 20h1.998c.666-3.333 2.333-5.167 5.002-5.5 4-.5 7-4 8-7l-1.5-1 1-1c1-1 2.004-2.5 3.5-5.5z" />
    </Svg>
  );
}

export default SvgQuillPenFill;
