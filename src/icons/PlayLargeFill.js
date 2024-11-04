import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlayLargeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 20.196V3.804a1 1 0 011.53-.848l13.113 8.196a1 1 0 010 1.696L7.53 21.044A1 1 0 016 20.196z" />
    </Svg>
  );
}

export default SvgPlayLargeFill;
