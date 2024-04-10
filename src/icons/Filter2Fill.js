import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFilter2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10 14L4 5V3h16v2l-6 9v6l-4 2v-8z" />
    </Svg>
  );
}

export default SvgFilter2Fill;
