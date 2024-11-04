import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowTurnBackLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 18.172l-2.535-2.536-1.414 1.414L18 22l4.95-4.95-1.415-1.414L19 18.172V11a8 8 0 10-16 0v9h2v-9a6 6 0 1112 0v7.172z" />
    </Svg>
  );
}

export default SvgArrowTurnBackLine;
