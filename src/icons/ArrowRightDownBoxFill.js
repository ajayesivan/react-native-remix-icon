import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowRightDownBoxFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H4zm12 13H7.586l3.5-3.5-3.793-3.794 1.414-1.414 3.793 3.793 3.5-3.5v8.414z" />
    </Svg>
  );
}

export default SvgArrowRightDownBoxFill;
