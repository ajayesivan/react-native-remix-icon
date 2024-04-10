import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRemixRunLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 2h10.5a6 6 0 013.054 11.165A5.992 5.992 0 0120 18v3h-2v-3a4 4 0 00-4-4H4v-2h10.5a4 4 0 000-8H4V2zm7 19H4v-2h7v2z" />
    </Svg>
  );
}

export default SvgRemixRunLine;
