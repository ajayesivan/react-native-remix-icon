import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShareForwardFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 14h-2a8.999 8.999 0 00-7.968 4.81A10.133 10.133 0 013 18C3 12.477 7.477 8 13 8V3l10 8-10 8v-5z" />
    </Svg>
  );
}

export default SvgShareForwardFill;
