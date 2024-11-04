import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPauseLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 5h2v14H6V5zm10 0h2v14h-2V5z" />
    </Svg>
  );
}

export default SvgPauseLine;
