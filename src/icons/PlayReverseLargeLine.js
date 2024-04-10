import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlayReverseLargeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 18.392V5.607L5.774 12 16 18.392zm2-14.588v16.392a1 1 0 01-1.53.848L3.357 12.848a1 1 0 010-1.696L16.47 2.956a1 1 0 011.53.848z" />
    </Svg>
  );
}

export default SvgPlayReverseLargeLine;
