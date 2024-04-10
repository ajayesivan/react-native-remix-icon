import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgOpenSourceFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.001 2c5.523 0 10 4.477 10 10 0 4.13-2.504 7.676-6.077 9.201l-2.518-6.55A3 3 0 0012 9a3 3 0 00-1.404 5.652l-2.518 6.55A10.003 10.003 0 012 12c0-5.523 4.477-10 10-10z" />
    </Svg>
  );
}

export default SvgOpenSourceFill;
