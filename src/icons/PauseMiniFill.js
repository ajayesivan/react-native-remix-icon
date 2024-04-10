import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPauseMiniFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15 7a1 1 0 112 0v10a1 1 0 11-2 0V7zM7 7a1 1 0 012 0v10a1 1 0 11-2 0V7z" />
    </Svg>
  );
}

export default SvgPauseMiniFill;
