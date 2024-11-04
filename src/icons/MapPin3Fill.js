import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMapPin3Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 19.945A9.001 9.001 0 0112 2a9 9 0 011 17.945V24h-2v-4.055z" />
    </Svg>
  );
}

export default SvgMapPin3Fill;
