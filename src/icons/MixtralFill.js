import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMixtralFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3h3.6v3.6h3.6v3.6h3.6V6.6h3.6V3H21v18h-3.6v-7.2h-3.6v3.6h-3.6v-3.6H6.6V21H3V3z" />
    </Svg>
  );
}

export default SvgMixtralFill;
