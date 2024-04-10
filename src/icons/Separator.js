import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSeparator(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 11h2v2H2v-2zm4 0h12v2H6v-2zm14 0h2v2h-2v-2z" />
    </Svg>
  );
}

export default SvgSeparator;
