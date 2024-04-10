import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlipVerticalLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 11H2v2h20v-2zm-4-9a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h12zm0 18H6v-3h12v3zm2-3a2 2 0 00-2-2H6a2 2 0 00-2 2v3a2 2 0 002 2h12a2 2 0 002-2v-3z" />
    </Svg>
  );
}

export default SvgFlipVerticalLine;
