import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowLeftDownBoxFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H4zm4 13V7.584l3.5 3.5 3.793-3.793 1.414 1.414-3.793 3.793 3.5 3.5H8z" />
    </Svg>
  );
}

export default SvgArrowLeftDownBoxFill;
