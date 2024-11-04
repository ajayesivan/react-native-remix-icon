import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWomenFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 15.934A7.501 7.501 0 0112 1a7.5 7.5 0 011 14.934V18h5v2h-5v4h-2v-4H6v-2h5v-2.066z" />
    </Svg>
  );
}

export default SvgWomenFill;
