import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowTurnBackFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 16h-4l5 6 5-6h-4v-5a8 8 0 10-16 0v9h2v-9a6 6 0 1112 0v5z" />
    </Svg>
  );
}

export default SvgArrowTurnBackFill;
