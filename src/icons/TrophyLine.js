import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTrophyLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.005 16.94v2.063h5v2h-12v-2h5V16.94a8.001 8.001 0 01-7-7.938v-6h16v6a8.001 8.001 0 01-7 7.938zm-7-11.937v4a6 6 0 1012 0v-4h-12zm-5 0h2v4h-2v-4zm20 0h2v4h-2v-4z" />
    </Svg>
  );
}

export default SvgTrophyLine;
