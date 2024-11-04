import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileCheckFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 7l-5-5H3.998A.995.995 0 003 2.992v18.016a1 1 0 00.993.992h8.348A6 6 0 0121 14.803V7zm-6.535 12.465L18 23l4.95-4.95-1.414-1.414L18 20.172 15.88 18.05l-1.414 1.415z" />
    </Svg>
  );
}

export default SvgFileCheckFill;
