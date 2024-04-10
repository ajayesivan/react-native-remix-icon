import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlayReverseLargeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18 20.196V3.804a1 1 0 00-1.53-.848L3.357 11.152a1 1 0 000 1.696l13.113 8.196a1 1 0 001.53-.848z" />
    </Svg>
  );
}

export default SvgPlayReverseLargeFill;
