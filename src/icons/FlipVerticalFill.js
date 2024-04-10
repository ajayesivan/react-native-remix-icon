import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlipVerticalFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 11H2v2h20v-2zm-4-4H6V4h12v3zm2-3a2 2 0 00-2-2H6a2 2 0 00-2 2v3a2 2 0 002 2h12a2 2 0 002-2V4zm-2 11a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 012-2h12z" />
    </Svg>
  );
}

export default SvgFlipVerticalFill;
